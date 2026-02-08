import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { CalendarIcon, Clock, User, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { toast } from "@/components/ui/sonner";
import { supabase } from "@/integrations/supabase/client";

const services = [
  "Cắt Tóc",
  "Nhuộm Tóc",
  "Uốn Tóc",
  "Duỗi Tóc",
  "Phục Hồi Tóc",
  "Gội Massage",
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
];

const formSchema = z.object({
  name: z.string().min(2, "Tên phải có ít nhất 2 ký tự").max(100, "Tên quá dài"),
  phone: z.string()
    .min(10, "Số điện thoại không hợp lệ")
    .max(15, "Số điện thoại không hợp lệ")
    .regex(/^[0-9+]+$/, "Số điện thoại chỉ được chứa số"),
  service: z.string().min(1, "Vui lòng chọn dịch vụ"),
  date: z.date({ required_error: "Vui lòng chọn ngày" }),
  time: z.string().min(1, "Vui lòng chọn giờ"),
  note: z.string().max(500, "Ghi chú quá dài").optional(),
});

type FormData = z.infer<typeof formSchema>;

const Booking = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: "",
      note: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const { data: response, error } = await supabase.functions.invoke('create-booking', {
        body: {
          customer_name: data.name,
          customer_phone: data.phone,
          service: data.service,
          booking_date: format(data.date, 'yyyy-MM-dd'),
          booking_time: data.time,
          note: data.note || null,
        },
      });

      if (error) {
        throw error;
      }
      
      toast.success("Đặt lịch thành công!", {
        description: "Chúng tôi sẽ liên hệ xác nhận trong thời gian sớm nhất.",
      });
      
      form.reset();
    } catch (error) {
      console.error('Booking error:', error);
      toast.error("Có lỗi xảy ra", {
        description: "Vui lòng thử lại sau hoặc liên hệ trực tiếp với chúng tôi.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-24 md:py-32 bg-charcoal text-white">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
          ref={ref}
        >
          <p className="text-gold-light tracking-[0.3em] uppercase text-sm mb-4 font-body">
            Đặt Lịch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light">
            Đặt Lịch Hẹn Ngay
          </h2>
          <p className="text-white/60 mt-6 max-w-xl mx-auto font-body">
            Điền thông tin bên dưới để đặt lịch. Chúng tôi sẽ liên hệ xác nhận 
            trong thời gian sớm nhất.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80 font-body flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Họ và Tên
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Nhập họ và tên"
                          {...field}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-gold-light"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80 font-body flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Số Điện Thoại
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="0901234567"
                          {...field}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-gold-light"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Service */}
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80 font-body">
                        Dịch Vụ
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-gold-light">
                            <SelectValue placeholder="Chọn dịch vụ" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Date */}
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-white/80 font-body flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" />
                        Ngày
                      </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white",
                                !field.value && "text-white/40"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP", { locale: vi })
                              ) : (
                                <span>Chọn ngày</span>
                              )}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date() || date > new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Time */}
                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/80 font-body flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Giờ
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-gold-light">
                            <SelectValue placeholder="Chọn giờ" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Note */}
              <FormField
                control={form.control}
                name="note"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/80 font-body flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Ghi Chú (tùy chọn)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Yêu cầu đặc biệt, mô tả kiểu tóc mong muốn..."
                        {...field}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-gold-light min-h-[100px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit */}
              <div className="text-center pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="bg-gold hover:bg-gold-light text-charcoal px-12 py-6 text-sm tracking-[0.2em] uppercase font-body transition-all duration-300"
                >
                  {isSubmitting ? "Đang gửi..." : "Xác Nhận Đặt Lịch"}
                </Button>
              </div>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;

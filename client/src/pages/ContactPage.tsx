import { Helmet } from 'react-helmet';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSendMessage } from "@/hooks/use-send-message";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

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
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CTASection from "@/components/CTASection";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const { sendMessage, isPending } = useSendMessage();
  const { toast } = useToast();
  
  // Define form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      await sendMessage(data);
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll respond shortly.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Shotokan Karate Academy</title>
        <meta 
          name="description" 
          content="Have questions about our karate programs? Contact Shotokan Karate Academy for information on classes, locations, and how to get started." 
        />
        <meta property="og:title" content="Contact Us | Shotokan Karate Academy" />
        <meta property="og:description" content="Get in touch with Shotokan Karate Academy for information on our programs, class schedules, or to schedule a free trial class." />
      </Helmet>

      <div className="bg-secondary py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Have questions or ready to begin your karate journey? We're here to help.
          </p>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-2/3 bg-white rounded-lg shadow-md p-8">
              <h2 className="font-heading text-secondary text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" type="tel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="membership">Membership Information</SelectItem>
                            <SelectItem value="schedule">Class Schedule</SelectItem>
                            <SelectItem value="trial">Free Trial Class</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message" 
                            className="min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="bg-primary hover:bg-primary/90 text-white font-bold" 
                    disabled={isPending}
                  >
                    {isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
            
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <div className="bg-secondary text-white rounded-lg shadow-md p-8 mb-8">
                <h3 className="font-heading text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary/20 p-3 rounded-md mr-4">
                      <MapPin className="text-accent h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold">Main Office</h4>
                      <p>123 Main Street, Downtown<br />City, State 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/20 p-3 rounded-md mr-4">
                      <Phone className="text-accent h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold">Phone</h4>
                      <p>(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/20 p-3 rounded-md mr-4">
                      <Mail className="text-accent h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold">Email</h4>
                      <p>info@shotokanacademy.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/20 p-3 rounded-md mr-4">
                      <Clock className="text-accent h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold">Office Hours</h4>
                      <p>Monday - Friday: 10:00 AM - 8:00 PM<br />
                      Saturday: 9:00 AM - 3:00 PM<br />
                      Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="font-heading text-secondary text-2xl font-bold mb-6">Connect With Us</h3>
                <p className="mb-4">Follow us on social media for updates, karate tips, and community highlights.</p>
                <div className="flex space-x-4">
                  <a href="#" className="bg-[#1877F2] text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-[#1DA1F2] text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-[#E4405F] text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-[#FF0000] text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition" aria-label="YouTube">
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SearchParams, TimeSlotType } from "../types";
import { MapPin, Clock, Timer, Search, CalendarIcon } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";

interface SearchBarProps {
  onSearch: (params: SearchParams) => void;
  defaultLocation?: string;
  isSticky?: boolean;
  className?: string;
}

const KATHMANDU_AREAS = [
  "Thamel",
  "Lazimpat",
  "Koteshwor",
  "Baluwatar",
  "Jhamsikhel",
  "Sanepa",
  "Pulchowk",
  "Baneshwor",
  "New Baneshwor",
  "Kalanki",
  "Satdobato",
  "Kupondole",
];

const TIME_SLOTS: { label: string; value: TimeSlotType }[] = [
  { label: "Morning (6 AM - 12 PM)", value: "morning" },
  { label: "Afternoon (12 PM - 5 PM)", value: "afternoon" },
  { label: "Evening (5 PM - 9 PM)", value: "evening" },
  { label: "Night (9 PM - 12 AM)", value: "night" },
];

const DURATION_OPTIONS = [
  { label: "1 Hour", value: "1" },
  { label: "1.5 Hours", value: "1.5" },
  { label: "2 Hours", value: "2" },
  { label: "3 Hours", value: "3" },
  { label: "4 Hours", value: "4" },
];

const searchFormSchema = z.object({
  location: z.string().min(1, { message: "Please select a location" }),
  date: z.date({ message: "Please select a date" }),
  timeSlot: z.string().min(1, { message: "Please select a time slot" }),
  duration: z.string().min(1, { message: "Please select duration" }),
});

type SearchFormValues = z.infer<typeof searchFormSchema>;

export const SearchBar: FC<SearchBarProps> = ({
  onSearch,
  defaultLocation = "",
  isSticky = false,
  className = "",
}) => {
  const form = useForm<SearchFormValues>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      location: defaultLocation,
      date: undefined,
      timeSlot: "",
      duration: "1",
    },
  });

  const onSubmit = async (data: SearchFormValues) => {
    const searchParams: SearchParams = {
      location: data.location,
      date: data.date,
      timeSlot: data.timeSlot as TimeSlotType,
      duration: parseFloat(data.duration),
    };

    onSearch(searchParams);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative ${className}`}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <motion.div
            className={`bg-card rounded-full shadow-lg border border-border overflow-hidden ${
              isSticky ? "shadow-xl" : ""
            }`}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center">
              {/* Location Field */}
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem className="flex-1 border-b lg:border-b-0 lg:border-r border-border">
                    <div className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <div className="flex-1">
                          <FormLabel className="text-xs font-semibold">
                            Location
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="h-8 border-0 px-0 text-sm font-normal focus:ring-0 focus:ring-offset-0">
                                <SelectValue placeholder="Where to play?" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {KATHMANDU_AREAS.map((area) => (
                                <SelectItem key={area} value={area}>
                                  <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    {area}, Kathmandu
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <FormMessage className="text-xs mt-1" />
                    </div>
                  </FormItem>
                )}
              />

              {/* Date Field */}
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex-1 border-b lg:border-b-0 lg:border-r border-border">
                    <div className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <CalendarIcon className="w-5 h-5 text-primary" />
                        <div className="flex-1">
                          <FormLabel className="text-xs font-semibold">
                            Date
                          </FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="ghost"
                                  className="h-8 w-full justify-start px-0 text-sm font-normal hover:bg-transparent"
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span className="text-muted-foreground">
                                      Pick a date
                                    </span>
                                  )}
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date <
                                  new Date(new Date().setHours(0, 0, 0, 0))
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                      <FormMessage className="text-xs mt-1" />
                    </div>
                  </FormItem>
                )}
              />

              {/* Time Slot Field */}
              <FormField
                control={form.control}
                name="timeSlot"
                render={({ field }) => (
                  <FormItem className="flex-1 border-b lg:border-b-0 lg:border-r border-border">
                    <div className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <div className="flex-1">
                          <FormLabel className="text-xs font-semibold">
                            Time
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="h-8 border-0 px-0 text-sm font-normal focus:ring-0 focus:ring-offset-0">
                                <SelectValue placeholder="Select time" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {TIME_SLOTS.map((slot) => (
                                <SelectItem key={slot.value} value={slot.value}>
                                  {slot.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <FormMessage className="text-xs mt-1" />
                    </div>
                  </FormItem>
                )}
              />

              {/* Duration Field */}
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem className="flex-1 border-b lg:border-b-0 lg:border-r border-border">
                    <div className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Timer className="w-5 h-5 text-primary" />
                        <div className="flex-1">
                          <FormLabel className="text-xs font-semibold">
                            Duration
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="h-8 border-0 px-0 text-sm font-normal focus:ring-0 focus:ring-offset-0">
                                <SelectValue placeholder="Select duration" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {DURATION_OPTIONS.map((option) => (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <FormMessage className="text-xs mt-1" />
                    </div>
                  </FormItem>
                )}
              />

              {/* Search Button */}
              <div className="px-2 py-2">
                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="w-full lg:w-auto px-8 py-3 rounded-full"
                  size="lg"
                >
                  {form.formState.isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <Search className="w-5 h-5 mr-2" />
                      <span className="hidden lg:inline">Search</span>
                    </>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        </form>
      </Form>
    </motion.div>
  );
};

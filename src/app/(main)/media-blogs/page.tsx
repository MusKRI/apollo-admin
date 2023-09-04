// **** Library Imports ****
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// **** Local Imports ****
import { Input } from "@/components/ui/input/input";
import { Button } from "@/components/ui/button/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form/form";

// formSchema
const formSchema = z.object({
  info1: z.string(),
  info2: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

const MediaBlogs = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      info1: "",
      info2: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
  };

  return (
    <div className="w-full">
      <div className="border-b h-14 flex items-center px-2">
        <h1 className="text-xl font-semibold">Media & Blogs</h1>
      </div>

      <div className="h-[calc(100%-56px)] px-2 py-4 space-y-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mb-3 space-y-5">
              <FormField
                control={form.control}
                name="info1"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Information 1</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="information..."
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <FormField
                control={form.control}
                name="info2"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Information 2</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="information 2..."
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <div className="flex items-center gap-4 justify-end">
                <Button type="submit">
                  <span>Add</span>
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default MediaBlogs;

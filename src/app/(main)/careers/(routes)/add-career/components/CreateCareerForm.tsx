// **** Library Imports ****
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// **** Local Imports ****
import { Input } from "@/components/ui/input/input";
import { Textarea } from "@/components/ui/textarea/textarea";
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
  title: z.string(),
  description: z.string(),
});

type CareerFormValuesType = z.infer<typeof formSchema>;

const CreateCareerForm = () => {
  const form = useForm<CareerFormValuesType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit: SubmitHandler<CareerFormValuesType> = async (data) => {
    console.log(data);
  };

  return (
    <div className="md:pb-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mb-3 space-y-5">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Career Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="career title..."
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
              name="description"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Career Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="career description..."
                        rows={6}
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
                <span>Create</span>
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateCareerForm;

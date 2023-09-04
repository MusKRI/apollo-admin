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
import { Separator } from "@/components/ui/separator/separator";

// formSchema
const desktopSchema = z.object({
  desktopImages: z.array(z.string()),
});

const mobileSchema = z.object({
  mobileImages: z.array(z.string()),
});

type DesktopFormValues = z.infer<typeof desktopSchema>;
type MobileFormValues = z.infer<typeof mobileSchema>;

const Home = () => {
  const desktopForm = useForm<DesktopFormValues>({
    resolver: zodResolver(desktopSchema),
    defaultValues: {
      desktopImages: ["", "", "", ""],
    },
  });

  const mobileForm = useForm<MobileFormValues>({
    resolver: zodResolver(mobileSchema),
    defaultValues: {
      mobileImages: ["", "", "", ""],
    },
  });

  const onSubmitDesktop: SubmitHandler<DesktopFormValues> = async (data) => {
    console.log(data);
  };

  const onSubmitMobile: SubmitHandler<MobileFormValues> = async (data) => {
    console.log(data);
  };

  return (
    <div className="w-full">
      <div className="border-b h-14 flex items-center px-2">
        <h1 className="text-xl font-semibold">Home</h1>
      </div>

      <div className="h-[calc(100%-56px)] px-2 py-4 space-y-5">
        <div>
          <h1 className="text-lg font-medium mb-3">Desktop Images</h1>
          <Form {...desktopForm}>
            <form onSubmit={desktopForm.handleSubmit(onSubmitDesktop)}>
              <div className="mb-3 grid grid-cols-1 lg:grid-cols-2 gap-4">
                {[0, 1, 2, 3].map((fieldIndex) => {
                  return (
                    <FormField
                      key={fieldIndex}
                      control={desktopForm.control}
                      name={`desktopImages.${fieldIndex}`}
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Image {fieldIndex + 1}</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Image url..."
                                type="text"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  );
                })}
              </div>
              <div className="flex items-center gap-4 justify-end">
                <Button type="submit">
                  <span>Add</span>
                </Button>
              </div>
            </form>
          </Form>
        </div>

        <Separator />

        <div>
          <h1 className="text-lg font-medium mb-3">Mobile Images</h1>
          <Form {...mobileForm}>
            <form onSubmit={mobileForm.handleSubmit(onSubmitMobile)}>
              <div className="mb-3 grid grid-cols-1 lg:grid-cols-2 gap-4">
                {[0, 1, 2, 3].map((fieldIndex) => {
                  return (
                    <FormField
                      key={fieldIndex}
                      control={mobileForm.control}
                      name={`mobileImages.${fieldIndex}`}
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Image {fieldIndex + 1}</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Image url..."
                                type="text"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  );
                })}
              </div>
              <div className="flex items-center gap-4 justify-end">
                <Button type="submit">
                  <span>Add</span>
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Home;

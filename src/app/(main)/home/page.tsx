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
import { Separator } from "@/components/ui/separator/separator";

// formSchema
const carouselSchema = z.object({
  carouselImages: z.array(z.string()),
});

const aboutUsSchema = z.object({
  purpose: z.string(),
  values: z.string(),
});

type CarouselFormValues = z.infer<typeof carouselSchema>;
type AboutUsFormValues = z.infer<typeof aboutUsSchema>;

const Home = () => {
  const carouselForm = useForm<CarouselFormValues>({
    resolver: zodResolver(carouselSchema),
    defaultValues: {
      carouselImages: ["", "", "", ""],
    },
  });

  const aboutUsForm = useForm<AboutUsFormValues>({
    resolver: zodResolver(aboutUsSchema),
    defaultValues: {
      purpose: "",
      values: "",
    },
  });

  const onSubmitCarouselInfo: SubmitHandler<CarouselFormValues> = async (
    data
  ) => {
    console.log(data);
  };

  const onSubmitAboutUsInfo: SubmitHandler<AboutUsFormValues> = async (
    data
  ) => {
    console.log(data);
  };

  return (
    <div className="w-full">
      <div className="border-b h-14 flex items-center px-2">
        <h1 className="text-xl font-semibold">Home</h1>
      </div>

      <div className="h-[calc(100%-56px)] px-2 py-4 space-y-5">
        <div>
          <h1 className="text-lg font-medium mb-3">Carousel</h1>
          <Form {...carouselForm}>
            <form onSubmit={carouselForm.handleSubmit(onSubmitCarouselInfo)}>
              <div className="mb-3 grid grid-cols-1 lg:grid-cols-2 gap-4">
                {[0, 1, 2, 3].map((fieldIndex) => {
                  return (
                    <FormField
                      key={fieldIndex}
                      control={carouselForm.control}
                      name={`carouselImages.${fieldIndex}`}
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
                  <span>Save</span>
                </Button>
              </div>
            </form>
          </Form>
        </div>

        <Separator />

        <div>
          <h1 className="text-lg font-medium mb-3">About Us</h1>
          <Form {...aboutUsForm}>
            <form onSubmit={aboutUsForm.handleSubmit(onSubmitAboutUsInfo)}>
              <div className="mb-3 grid grid-cols-1 lg:grid-cols-2 gap-4">
                <FormField
                  control={aboutUsForm.control}
                  name="purpose"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Purpose</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Purpose..."
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  control={aboutUsForm.control}
                  name="values"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Values</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Values..."
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
              <div className="flex items-center gap-4 justify-end">
                <Button type="submit">
                  <span>Save</span>
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

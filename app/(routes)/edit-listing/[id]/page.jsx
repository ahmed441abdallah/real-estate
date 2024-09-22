"use client";
import React, { useState } from "react";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";
import { Label } from "../../../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../../components/ui/alert-dialog";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import { Button } from "../../../../components/ui/button";
import { Formik } from "formik";
import { useParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { useUser } from "@clerk/nextjs";
import { supabase } from "../../../../utils/supabase/client";
import FileUpload from "../_components/FileUpload";
import { LoaderCircle } from "lucide-react";

const page = () => {
  const { id } = useParams();
  const { user } = useUser();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const saveImages = async () => {
    for (const image of images) {
      // loop through images and upload to storage
      const file = image;
      const fileExt = file.name.split(".").pop(); // Get the file extension
      const fileName = `${Date.now().toString()}.${fileExt}`;
      const { data, error } = await supabase.storage
        .from("listing-images")
        .upload(`${fileName}`, file, {
          contentType: `image/${fileExt}`,
          upsert: false,
        });
      if (error) {
        toast.error("Failed To Upload images!");
      } else {
        const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL + fileName;
        console.log(imageUrl); // store this in the database
        const { data, error } = await supabase
          .from("listing_images")
          .insert([{ url: imageUrl, listing_id: Number(id) }])
          .eq("listing_id", Number(id))
          .select();
        if (data) {
          console.log("Image saved in database Successfully!");
        }
        if (error) {
          console.log("Image saved in database Failed!");
        }
      }
    }
  };
  const handleUpdate = async (formValues) => {
    setLoading(true);
    const { data, error } = await supabase
      .from("listing")
      .update(formValues)
      .eq("id", Number(id))
      .select();
    if (data) {
      toast.success("Successfully Updated Details!");
      setLoading(false);
    }
    if (error) {
      toast.error("Failed To Update Details!");
      setLoading(false);
    }
    if (images.length > 0) {
      saveImages();
    }
  };
  const handlePublishActive = async () => {
    const { data, error } = await supabase
      .from("listing")
      .update({ active: true })
      .eq("id", Number(id))
      .select();
    if (data) {
      toast.success("Successfully Published!");
    }
    if (error) {
      toast.error("Failed To Publish!");
    }
  };
  return (
    <div className="m-4 p-4 sm:px-24 sm:py-12">
      <h1 className="text:xl sm:text-2xl  font-semibold">
        Enter More Details About Your Listing
      </h1>
      <Formik
        initialValues={{
          type: "",
          property_type: "",
          bedroom: "",
          bathroom: "",
          built_in: "",
          parking: "",
          area: "",
          lot_size: "",
          price: "",
          hoa: "",
          description: "",
          full_name: user?.fullName,
          profile_image: user?.imageUrl,
        }} // name should be same as input name attribute and database field name
        onSubmit={(values) => {
          console.log(values);
          handleUpdate(values);
        }}
      >
        {({
          values,
          handleSubmit,
          handleChange,
          resetForm,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="mt-4 p-8 border rounded-md shadow-md">
              <section className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                <div>
                  <p className="text-gray-500 mb-2">
                    Do You Want To Sell Or Rent?
                  </p>
                  <RadioGroup onValueChange={(v) => (values.type = v)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Sell" id="r1" />
                      <Label htmlFor="r1">Sell</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Rent" id="r2" />
                      <Label htmlFor="r2">Rent</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <p className="text-gray-500 mb-2">Property Type</p>
                  <Select onValueChange={(v) => (values.property_type = v)}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Options</SelectLabel>
                        <SelectItem value="Town House">Town House</SelectItem>
                        <SelectItem value="Condos">Condo</SelectItem>
                        <SelectItem value="Single Family House">
                          Single Family House
                        </SelectItem>
                        <SelectItem value="Villa">Villa</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </section>
              <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="Bedroom">Bedroom</Label>
                  <Input
                    type="text"
                    name="bedroom"
                    id="Bedroom"
                    placeholder="Ex.2"
                    onChange={handleChange}
                    value={values.bedroom}
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="Bathroom">Bathroom</Label>
                  <Input
                    type="text"
                    id="Bathroom"
                    placeholder="Ex.2"
                    onChange={handleChange}
                    name="bathroom"
                    value={values.bathroom}
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="Built In">Built In</Label>
                  <Input
                    type="text"
                    id="Built In"
                    placeholder="Ex.1900 sq.fr"
                    onChange={handleChange}
                    name="built_in"
                    value={values.built_in}
                  />
                </div>
              </section>
              <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="Parking">Parking</Label>
                  <Input
                    type="text"
                    id="Parking"
                    placeholder="Ex.2"
                    onChange={handleChange}
                    name="parking"
                    value={values.parking}
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="Area">Area(sq.fr)</Label>
                  <Input
                    type="text"
                    id="Area"
                    placeholder="Ex.1900"
                    onChange={handleChange}
                    name="area"
                    value={values.area}
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="Lot Size">Lot Size</Label>
                  <Input
                    type="text"
                    id="Lot Size"
                    placeholder="Ex.1900 sq.fr"
                    onChange={handleChange}
                    name="lot_size"
                    value={values.lot_size}
                  />
                </div>
              </section>
              <section className="grid grid-cols-1 sm:grid-cols-3 mt-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="Selling">Selling Price ($)</Label>
                  <Input
                    type="text"
                    id="Selling"
                    placeholder="500000$"
                    onChange={handleChange}
                    name="price"
                    value={values.price}
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="HOA">HOA(PerMonth)($)</Label>
                  <Input
                    type="text"
                    id="HOA"
                    placeholder="150$"
                    onChange={handleChange}
                    name="hoa"
                    value={values.hoa}
                  />
                </div>
                <span></span>
              </section>
              <div className="grid w-full gap-1.5 mt-2">
                <Label htmlFor="description">Your Message</Label>
                <Textarea
                  placeholder="Type your message here."
                  id="description"
                  name="description"
                  onChange={handleChange}
                  value={values.description}
                />
                <p className="text-sm text-muted-foreground mb-2">
                  Your message will be copied to the support team.
                </p>
              </div>
              <FileUpload images={images} setImages={setImages} />
            </div>

            <div className="flex gap-4 mt-4 justify-end">
              <Button
                type="button"
                className="bg-red-600 hover:bg-red-500 mr-auto "
                onClick={() => resetForm()}
              >
                Cancel
              </Button>
              <Button variant="outline" type="submit">
                {loading ? <LoaderCircle className=" animate-spin" /> : "Save"}
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button type="button">Save & Publish</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure to publish?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently
                      publish your listing and and add to our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handlePublishActive}>
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </form>
        )}
      </Formik>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default page;

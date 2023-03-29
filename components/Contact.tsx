import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast, Toaster } from "react-hot-toast";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo[];
  polishLanguage: boolean;
};

type Inputs = {
  name: string;
  email: string;
  title: string;
  message: string;
};

type Response = {
  status: string;
};

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  title: yup.string().required("Title is required"),
  message: yup.string().required("Message is required"),
});

const Contact = ({ pageInfo, polishLanguage }: Props) => {
  const [response, setResponse] = useState<Response>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    if (errors.name || errors.email || errors.title || errors.message) {
      toast.error("Please fill all fields");
      return;
    }

    const notification = toast.loading("Sending message...");
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/mail`, {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse(data);
      })
      .finally(() => {
        //console.log(response?.status);

        if (response?.status === "success") {
          reset();
          toast.dismiss(notification);
          toast.success("Message sent successfully!");
          setResponse({ status: "" });
          return;
        } else {
          toast.dismiss(notification);
          toast.error("Something went wrong. Please try again later.");
          setResponse({ status: "" });
          return;
        }
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 
    justify-evenly mx-auto items-center"
    >
      <Toaster position="top-center" />
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        {polishLanguage ? "Kontakt" : "Contact Me"}
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          {polishLanguage
            ? `Mam dokładnie to, czego potrzebujesz. `
            : `I have got just what you need. `}

          <span className="decoration-[#F7AB0A]/50 underline">
            {polishLanguage ? "Porozmawiajmy" : "Lets Talk."}
          </span>
        </h4>

        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p>{pageInfo[0]?.address}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p>{pageInfo[0]?.email}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              type="text"
              className="contactInput flex-1"
              placeholder={polishLanguage ? "Imię*" : "Name*"}
            />
            <input
              {...register("email")}
              type="email"
              className="contactInput flex-1"
              placeholder="Email*"
            />
          </div>
          {errors.name || errors.email ? (
            <div className="flex flex-1 text-center justify-center items-center">
              <div className="text-red-500 flex-1">{errors?.name?.message}</div>
              <div className="text-red-500 flex-1">
                {errors?.email?.message}
              </div>
            </div>
          ) : null}

          <input
            {...register("title")}
            type="text"
            className="contactInput"
            placeholder={polishLanguage ? "Tytuł*" : "Title*"}
          />

          {errors.title && (
            <div className="flex flex-1 items-center justify-center">
              <div className="text-red-500 ">{errors?.title?.message}</div>
            </div>
          )}

          <textarea
            {...register("message")}
            className="contactInput"
            placeholder={polishLanguage ? "Wiadomość*" : "Message*"}
          />

          {errors.message && (
            <div className="flex flex-1 items-center justify-center">
              <div className="text-red-500">{errors?.message?.message}</div>
            </div>
          )}

          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            {polishLanguage ? "Wyślij" : "Send"}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;

"use client";

import { useState } from "react";
import { z } from "zod";

type TFromData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const formDataSchema = z.object({
  firstName: z.string().min(3).max(20),
  lastName: z.string().min(3).max(20),
  email: z.string().email(),
  message: z.string().min(3).max(255),
});

type TFormData = z.infer<typeof formDataSchema>;

const ContactForm = () => {
  const [formData, setFormData] = useState<TFromData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errorData, setErrorData] = useState<any[]>([]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      formDataSchema.parse(formData);

      // To-DO

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });

      setErrorData([]);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrorData(error.issues);
      }
    }
  };

  const checkErrors = (path: string) => {
    {
      return errorData
        .filter((err) => err.path[0] === path)
        .map((err) => (
          <p key={path} className="text-rose-500">
            {err.message}
          </p>
        ));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-5"
    >
      {/* Form Control */}
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName" className="cursor-pointer">
          First Name
        </label>
        <input
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter Your First Name"
          className="border p-2 rounded-lg"
        />
        {checkErrors("firstName")}
      </div>
      {/* Form Control */}
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName" className="cursor-pointer">
          Last Name
        </label>
        <input
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
          type="text"
          id="lasttName"
          name="lastName"
          placeholder="Enter Your Last Name"
          className="border p-2 rounded-border"
        />
        {checkErrors("lastName")}
      </div>
      {/* Form Control */}
      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="email" className="cursor-pointer">
          Email Address
        </label>
        <input
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          type="text"
          id="email"
          name="email"
          placeholder="Enter email address"
          className="border p-2 rounded-border"
        />
        {checkErrors("email")}
      </div>
      {/* Form Control */}
      <div className="flex flex-col gap-2 md:col-span-2">
        <label htmlFor="message" className="cursor-pointer">
          Message
        </label>
        <textarea
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          rows={7}
          id="message"
          name="message"
          placeholder="write your message"
          className="border p-2 rounded-border resize-none"
        />
        {checkErrors("message")}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;

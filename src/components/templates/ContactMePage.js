"use client";
import actionsForm from "@/actions/actionsForm";
import Submit from "../ui/Submit";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
function ContactMePage() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center dark:text-second font-vazir my-5">
      <form
        className=" p-2 border-primary border w-[590px] dark:border-second rounded-lg flex items-center flex-col gap-2"
        action={async (formData) => {
          const { message, type } = await actionsForm(formData);
          if (type === "success") {
            toast.success(message);
            router.refresh();
          } else {
            toast.error(message);
          }
        }}
      >
        <div className="relative w-full mt-5">
          <input
            type="text"
            required
            className="input"
            name="name"
            minLength="4"
          />
          <label className="lable">Name</label>
        </div>
        <div className="relative w-full mt-5">
          <input
            type="text"
            required
            className="input"
            name="lastName"
            minLength="4"
          />
          <label className="lable">LastName</label>
        </div>
        <div className="relative w-full mt-5">
          <textarea
            cols="30"
            rows="5"
            id="description"
            className="input"
            name="descriptions"
            required
            minLength="5"
          ></textarea>
          <label className="lable">Descriptions</label>
        </div>
        <Submit />
      </form>
    </div>
  );
}

export default ContactMePage;

"use server";
import contactMeModels from "@/models/contactMeModels";
import connectDB from "@/utils/connections";

const actionsForm = async (formData) => {
  try {
    await connectDB();
    const name = formData.get("name");
    const lastName = formData.get("lastName");
    const descriptions = formData.get("descriptions");
    if (!name || !lastName || !descriptions)
      return {
        message: "invalid data !!!",
        type: "failed",
      };
    await contactMeModels.create({ name, lastName, descriptions });
    return {
      message: "Your message was successfully sent ❤️",
      type: "success",
    };
  } catch (error) {
    return {
      message: "A problem has occurred on the server side",
      type: "failed",
    };
  }
};
export default actionsForm;

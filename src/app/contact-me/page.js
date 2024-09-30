import ContactMePage from "@/components/templates/ContactMePage";
import connectDB from "@/utils/connections";

async function ContactMe() {
  await connectDB();
  return <ContactMePage />;
}

export default ContactMe;

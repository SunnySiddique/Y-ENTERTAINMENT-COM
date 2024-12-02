import ContactForm from "../../components/contact/ContactForm";
import FAQSection from "../../components/contact/FAQSection";

const ContactPage = () => {
  return (
    <div className="py-10 md:py-16">
      <ContactForm />
      <FAQSection />
    </div>
  );
};

export default ContactPage;

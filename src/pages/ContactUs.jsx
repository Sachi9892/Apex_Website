import RegisterForm from '../components/RegisterForm';
import MapSection from '../components/MapSection';

function ContactUs() {
    return (
        <>
            <section className="w-full bg-white font-[Inter]">
                {/* Page Heading */}
                <div className="text-center py-12">
                    <h2 className="text-4xl font-bold text-gray-900">Get in Touch With Apex Edutech</h2>
                    <p className="text-gray-600 mt-2 text-lg">
                        We'd love to hear from you — reach out and let's start a conversation.
                    </p>
                </div>

                {/* Grid Layout: Form & Info side-by-side */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 px-6 md:px-10 min-h-[calc(100vh-200px)] items-start">
                    {/* Left Section - Info */}
                    <div className="flex flex-col justify-start space-y-6 md:space-y-8">
                        <h3 className="text-2xl font-semibold text-gray-800">Let’s Connect</h3>
                        <p className="text-gray-700 text-base leading-relaxed">
                            We’re here to help and answer any question you might have. Our team is happy to assist you —
                            just fill out the form, and we’ll respond as soon as we can.
                        </p>
                        <div className="text-gray-700 text-base space-y-3 pt-4 border-t border-gray-200">
                            <p><span className="font-medium">📍 Address: </span>
                                Office No. 101, Sapphire, Behind Bank of Baroda,
                                Main Market, Mahatma Gandhi Road,
                                Vile Parle East, Mumbai, Maharashtra 400057</p>
                            <p><span className="font-medium">📞 Phone:</span> +91 98212 13536</p>
                            <p><span className="font-medium">📞 Phone:</span> +91 93212 13536</p>
                            <p><span className="font-medium">📧 Email:</span> info@superapex.com</p>
                        </div>
                    </div>

                    {/* Right Section - Form */}
                    <div className='mb-24'>
                        <RegisterForm />
                    </div>
                </div>
            </section>

            <MapSection />
        </>
    );
}

export default ContactUs;

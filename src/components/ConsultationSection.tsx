import { useState } from "react";
import { Phone, MessageCircle, Calendar, Clock, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";

const consultationTypes = [
  {
    name: "Quick Query",
    duration: "15 min",
    price: "₹499",
    features: ["Single question", "Quick guidance", "Text response"],
  },
  {
    name: "Standard Reading",
    duration: "30 min",
    price: "₹1,499",
    features: ["Detailed analysis", "Remedies included", "Voice call"],
    popular: true,
  },
  {
    name: "Premium Consultation",
    duration: "60 min",
    price: "₹2,999",
    features: ["Comprehensive reading", "Full remedies", "Video call", "Follow-up support"],
  },
];

const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

export const ConsultationSection = () => {
  const [selectedType, setSelectedType] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleWhatsApp = () => {
    if (!name || !email || !phone || !selectedDate || !selectedTime) {
      alert("Please fill all fields before sending to WhatsApp!");
      return;
    }

    const message = `Hello, I would like to book a consultation.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nConsultation Type: ${consultationTypes[selectedType].name}\nDate: ${selectedDate}\nTime: ${selectedTime}\nPrice: ${consultationTypes[selectedType].price}`;
    
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="consultation" className="relative py-24 md:py-32 bg-cosmic-mid/30">
      <div className="absolute inset-0 mandala-pattern opacity-15" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-none blur-[120px] pointer-events-none" />

      <div className="container px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 mb-4 text-sm text-primary/80 font-body tracking-widest uppercase border border-primary/30 rounded-none">
              परामर्श बुक करें
            </span>
            <h2 className="font-heading text-3xl md:text-5xl mb-4">
              Begin Your <span className="text-golden">Cosmic Journey</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground font-body">
              Connect with our experienced Vedic astrologers for personalized guidance.
              Your celestial blueprint awaits.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Consultation Types */}
            <div>
              <h3 className="font-heading text-2xl text-foreground mb-6">Choose Your Session</h3>
              <div className="space-y-4">
                {consultationTypes.map((type, index) => (
                  <Card
                    key={type.name}
                    onClick={() => setSelectedType(index)}
                    className={`p-6 cursor-pointer transition-all border-2 rounded-none ${
                      selectedType === index
                        ? "border-primary bg-primary/5"
                        : "border-border/50 hover:border-primary/30"
                    } ${type.popular ? "relative" : ""}`}
                  >
                    {type.popular && (
                      <span className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-body rounded-none">
                        Most Popular
                      </span>
                    )}

                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-heading text-xl text-foreground">{type.name}</h4>
                        <p className="font-body text-sm text-muted-foreground flex items-center gap-2 mt-2">
                          <Clock className="h-4 w-4" /> {type.duration}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-heading text-2xl text-primary">{type.price}</p>
                      </div>
                    </div>

                    <ul className="mt-6 space-y-3">
                      {type.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm font-body text-muted-foreground"
                        >
                          <CheckCircle className="h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>

            {/* Booking Form */}
            <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm rounded-none">
              <h3 className="font-heading text-2xl text-foreground mb-6">Schedule Your Session</h3>
              <div className="space-y-6">
                <div>
                  <label className="font-body text-sm text-muted-foreground mb-2 block">Full Name</label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="bg-background/50 border-border focus:border-primary rounded-none"
                  />
                </div>

                <div>
                  <label className="font-body text-sm text-muted-foreground mb-2 block">Email Address</label>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="you@example.com"
                    className="bg-background/50 border-border focus:border-primary rounded-none"
                  />
                </div>

                <div>
                  <label className="font-body text-sm text-muted-foreground mb-2 block">Phone Number</label>
                  <Input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                    className="bg-background/50 border-border focus:border-primary rounded-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-sm text-muted-foreground mb-2 block">Preferred Date</label>
                    <Input
                      type="date"
                      className="bg-background/50 border-border focus:border-primary rounded-none"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="font-body text-sm text-muted-foreground mb-2 block">Preferred Time</label>
                    <select
                      className="w-full px-3 py-2 border border-border bg-background/50 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary rounded-none"
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-body text-sm text-muted-foreground mb-2 block">Quick Select Time</label>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`p-2 text-xs font-body rounded-none transition-all ${
                          selectedTime === time
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary/30 text-muted-foreground hover:bg-primary/10"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <p className="text-xs font-body text-muted-foreground">
                  * Birth date, time, and place will be collected after booking
                </p>

                <Button
                  variant="default"
                  size="lg"
                  className="w-full gap-2 rounded-none"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="h-5 w-5" />
                  Book via WhatsApp
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

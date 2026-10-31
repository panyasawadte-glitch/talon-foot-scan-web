import { Button } from "@/components/ui/button";
import { Shield, FileText, Brain, Scan, Phone, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onStart: () => void;
}

export default function HeroSection({ onStart }: HeroSectionProps) {
  return (
    <div className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfeff]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#06C755]/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        </div>
        <div className="relative container py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium mb-4">
                <Shield className="w-4 h-4" />
                <span>ฟรี ไม่มีค่าใช้จ่าย</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
                ตรวจสุขภาพเท้า
                <br />
                <span className="text-primary">เบื้องต้นฟรี</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-3 max-w-md">
                ประเมินความเสี่ยงของปัญหาเท้า เข่า และการลงน้ำหนัก
                พร้อมรับคำแนะนำการดูแลเท้าเฉพาะคุณ
              </p>
              <p className="text-sm text-muted-foreground mb-6 max-w-md">
                โดย <span className="font-semibold text-foreground">TALON</span> ผู้เชี่ยวชาญด้านสุขภาพเท้าครบวงจร
              </p>
              <Button
                size="lg"
                className="text-lg px-8 py-6 rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-200 active:scale-[0.97]"
                onClick={onStart}
              >
                เริ่มตรวจฟรี
              </Button>
              <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  ใช้เวลาเพียง 3 นาที
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  วิเคราะห์ด้วย AI Vision
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="hidden md:block"
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663415538214/Y6UkQPqbEVN9gTJtxbVbxj/hero-foot-analysis-RkXGGKTB28vs5Jaqbzopme.png"
                alt="AI Foot Analysis"
                className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
            วิธีรับบริการ
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            ง่ายๆ ใน 3 ขั้นตอน
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                icon: <FileText className="w-8 h-8" />,
                title: "ทำแบบประเมิน",
                desc: "ตอบคำถามสั้นๆ เกี่ยวกับอาการและลักษณะเท้าของคุณ",
                color: "bg-primary/10 text-primary",
              },
              {
                step: "2",
                icon: <Scan className="w-8 h-8" />,
                title: "ถ่ายรูปเท้า 6 มุม",
                desc: "ถ่ายรูปเท้าตามมุมที่กำหนด ให้ AI วิเคราะห์ลักษณะเท้า",
                color: "bg-blue-50 text-blue-600",
              },
              {
                step: "3",
                icon: <Brain className="w-8 h-8" />,
                title: "รับผลวิเคราะห์ AI",
                desc: "AI วิเคราะห์บุคลิก สุขภาพเท้า และแนะนำรองเท้าที่เหมาะสม",
                color: "bg-[#06C755]/10 text-[#06C755]",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.23, 1, 0.32, 1] }}
                className="text-center p-6 rounded-2xl bg-secondary/30"
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl ${item.color} flex items-center justify-center`}>
                  {item.icon}
                </div>
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-foreground text-background text-sm font-bold mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* Trust badges */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            ทำไมต้อง TALON?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { label: "ผู้เชี่ยวชาญด้านสุขภาพเท้าครบวงจร", icon: "🦶" },
              { label: "ได้รับการยอมรับจากหลายโรงพยาบาลชั้นนำ", icon: "🏥" },
              { label: "AI Foot Analysis Technology", icon: "🤖" },
              { label: "มีสาขาที่ Central, ICON SIAM และ ร.พ. ชั้นนำ", icon: "📍" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            พร้อมตรวจสุขภาพเท้าแล้วหรือยัง?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            เริ่มต้นง่ายๆ ไม่มีค่าใช้จ่าย ผลวิเคราะห์ทันที
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-6 rounded-xl shadow-lg shadow-primary/20 active:scale-[0.97] transition-transform"
            onClick={onStart}
          >
            เริ่มตรวจเลย
          </Button>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
            <a href="tel:028963800" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              02-896-3800
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="https://lin.ee/xIQUSV3" target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-primary transition-colors">
              LINE: @talon
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="https://www.talon.co.th" target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-primary transition-colors">
              www.talon.co.th
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

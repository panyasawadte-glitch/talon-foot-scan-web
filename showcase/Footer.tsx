import { Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-border py-8 mt-auto">
      <div className="container max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold text-sm">TALON รองเท้าสุขภาพที่หมอเท้าแนะนำ</p>
            <p className="text-xs text-muted-foreground mt-1">
              ผู้เชี่ยวชาญด้านสุขภาพเท้าครบวงจร สำหรับผู้เป็นเบาหวาน รองช้ำ เท้าแบน กระดูกโปน
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a
              href="tel:028963800"
              className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              02-896-3800
            </a>
            <a
              href="https://lin.ee/xIQUSV3"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              LINE: @talon
            </a>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-xs text-muted-foreground">
          <a href="https://www.talon.co.th" target="_blank" rel="noopener" className="hover:text-primary transition-colors">
            www.talon.co.th
          </a>
          <span>|</span>
          <span>Central เซ็นทรัลเวิลด์ / ปิ่นเกล้า / ลาดพร้าว / ICON SIAM</span>
        </div>
        <p className="text-[10px] text-muted-foreground text-center mt-6">
          ข้อมูลในเว็บไซต์นี้เป็นการประเมินเบื้องต้นเท่านั้น ไม่สามารถทดแทนการตรวจวินิจฉัยโดยแพทย์หรือผู้เชี่ยวชาญ
        </p>
      </div>
    </footer>
  );
}

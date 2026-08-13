import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { message } = await req.json();
    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // 1. Try local RAG server on port 5000
    try {
      const ragRes = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (ragRes.ok) {
        const data = await ragRes.json();
        if (data && data.reply) {
          return NextResponse.json({ reply: data.reply, sources: data.sources || [] });
        }
      }
    } catch (_err) {
      // Local RAG server offline bypass
    }

    // 2. Synthesize detailed agency strategy response
    const q = message.toLowerCase().trim();
    let reply = "";
    let targets = [];

    if (q.includes("brand") || q.includes("consult") || q.includes("identity")) {
      reply = `### 🎨 Brand Consultancy & Market Strategy\n\nWe define core brand identity, visual design systems, and market positioning for ambitious brands.\n\n- **Capabilities**: Visual Identity, Design Systems, Brand Architecture, Strategic PR.\n- **Case Study**: **Godrej Lakeside Orchard** – High-converting real estate launch strategy.\n- **Engagement**: Fixed-price scope starting at $3,500 with 2-4 week delivery timeline.`;
      targets = ["brand-consultancy", "godrej-case-study"];
    } else if (
      q.includes("web") ||
      q.includes("ui") ||
      q.includes("ux") ||
      q.includes("app") ||
      q.includes("mobile") ||
      q.includes("design") ||
      q.includes("development")
    ) {
      reply = `### 💻 Website UI/UX & Full-Stack Application Engineering\n\nWe build ultra-fast, SEO-optimized web and mobile applications using React, Next.js, and Node.js.\n\n- **Capabilities**: SaaS Product MVPs, E-Commerce platforms, High-converting landing pages.\n- **Case Study**: **UnderNeat** by Kusha Kapila – E-commerce UI/UX & conversion rate optimization.\n- **Engagement**: Full SaaS MVPs from $6,500 (4-8 weeks); UI/UX systems from $3,500.`;
      targets = ["website-ui-ux", "web-mobile-app", "underneat-case-study"];
    } else if (
      q.includes("marketing") ||
      q.includes("digital") ||
      q.includes("seo") ||
      q.includes("sem") ||
      q.includes("growth")
    ) {
      reply = `### 🚀 Digital Marketing & Performance Growth\n\nWe execute performance marketing campaigns, influencer partnerships, and multi-channel acquisition.\n\n- **Capabilities**: Meta & Google Ads, Creator Marketing, SEO/SEM, Conversion Optimization.\n- **Case Study**: **Uber for Business** – Enterprise mobility growth strategy.\n- **Engagement**: Performance retainers and custom campaign management.`;
      targets = ["digital-marketing", "influencer-marketing", "uber-case-study"];
    } else if (
      q.includes("video") ||
      q.includes("animation") ||
      q.includes("cgi") ||
      q.includes("3d") ||
      q.includes("2d") ||
      q.includes("motion")
    ) {
      reply = `### 🎬 2D/3D Animation & CGI Video Production\n\nWe craft cinema-grade product visuals, 3D animations, and high-impact visual storytelling.\n\n- **Capabilities**: 3D Product CGI, Motion Graphics, Live Commercials, Brand Films.\n- **Case Study**: **Titan Flying Tourbillon** – High-precision CGI product reveal.\n- **Engagement**: Custom video production from 2 to 4 weeks.`;
      targets = ["live-videos", "animation-service", "titan-case-study"];
    } else if (q.includes("pr") || q.includes("public") || q.includes("reputation")) {
      reply = `### 📰 Public Relations (PR) & Reputation Management\n\nWe position brands across top-tier digital and print media publications.\n\n- **Capabilities**: Media Relations, Corporate PR, Crisis Management, Thought Leadership.\n- **Engagement**: Fixed monthly retainers and milestone-based placement campaigns.`;
      targets = ["pr-service"];
    } else if (q.includes("whatsapp") || q.includes("integrate") || q.includes("existing") || q.includes("redesign")) {
      reply = `### 💬 WhatsApp & Third-Party API Integration (No Redesign Required)\n\nWe integrate official **WhatsApp Business API**, Meta Webhooks, Stripe, CRM tools, or custom APIs into your existing website **without any redesign or layout changes**.\n\n- **Tech Stack Audit**: Compatible with React, Node, WordPress, PHP, Python, Shopify, HTML.\n- **Seamless Integration**: Your existing layout remains 100% untouched while adding real-time chat & lead capture.\n- **Timeline**: 1 to 2 weeks.`;
      targets = ["website-ui-ux", "web-mobile-app"];
    } else if (q.includes("price") || q.includes("pricing") || q.includes("cost") || q.includes("fee") || q.includes("rate")) {
      reply = `### 💰 Moshi Moshi Engagement Pricing\n\n- **UI/UX Design & Landing Pages**: Starting at $3,500 (2-3 weeks)\n- **Full-Stack SaaS MVPs**: Starting at $6,500 (4-8 weeks)\n- **Custom AI & RAG Solutions**: $8,000 to $18,000+ (3-6 weeks)\n- **WhatsApp & API Integrations**: Fixed-price quotes based on tech stack\n- **100% IP Ownership**: Complete source code and asset transfer upon launch.`;
      targets = ["brand-consultancy", "website-ui-ux"];
    } else {
      reply = `### 💡 Strategy Recommendation for "${message}"\n\nTo achieve your business goals, we recommend combining our **Brand Consultancy**, **Digital Marketing**, and **Website UI/UX** services.\n\n- **Fixed Proposals**: Clear deliverables with zero hidden fees.\n- **IP Ownership**: 100% code & asset ownership upon launch.`;
      targets = ["brand-consultancy", "digital-marketing"];
    }

    return NextResponse.json({ reply, targets });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

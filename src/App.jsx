import { useState, useEffect } from "react";

const C = {
  ink:"#0a0a0a", paper:"#f5f0e8", paper2:"#ece7de",
  fire:"#e8400c", jade:"#1a7a5e", gold:"#c8a84b",
  muted:"#888", border:"#d8d3ca", white:"#ffffff",
};

const syne = {fontFamily:"'Syne',sans-serif"};
const mono = {fontFamily:"'Martian Mono',monospace"};
const inst = {fontFamily:"'Instrument Sans',sans-serif"};

function useIsMobile() {
  const [m, setM] = useState(window.innerWidth < 768);
  useEffect(() => {
    const h = () => setM(window.innerWidth < 768);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return m;
}

const POSTS = [
  {id:1,num:"001",cat:"Growth",tag:"fire",brand:"Nomad Goods",bColor:"#e8400c",bInit:"N",title:"The Retention Engine Behind 8-Figure Brands",excerpt:"Most brands chase acquisition. The smart ones engineer loyalty.",date:"May 22",time:"6 min"},
  {id:2,num:"002",cat:"Launch",tag:"jade",brand:"Glow Labs",bColor:"#1a7a5e",bInit:"G",title:"Surviving a Crowded Market Without Dropping Price",excerpt:"Price wars destroy margins. Differentiation builds them.",date:"May 20",time:"5 min"},
  {id:3,num:"003",cat:"Brand",tag:"sky",brand:"Rune Studio",bColor:"#1a4a8a",bInit:"R",title:"Your Brand Voice Is Your Only Moat",excerpt:"Products get copied. Ads stop working. A genuine brand voice compounds forever.",date:"May 18",time:"7 min"},
  {id:4,num:"004",cat:"Operations",tag:"gold",brand:"Fieldwork",bColor:"#c8a84b",bInit:"F",title:"Supply Chain Lessons From Our Worst Quarter",excerpt:"We lost six figures in one season. Here are the fixes every brand needs.",date:"May 15",time:"9 min"},
  {id:5,num:"005",cat:"Marketing",tag:"fire",brand:"LMTD Co.",bColor:"#9b59b6",bInit:"L",title:"Organic Reach Isn't Dead — You're Just Doing It Wrong",excerpt:"Algorithm changes punish lazy content. Here's what actually works.",date:"May 12",time:"5 min"},
  {id:6,num:"006",cat:"Finance",tag:"jade",brand:"Kova Brand",bColor:"#e67e22",bInit:"K",title:"Read Your P&L Like a Brand Operator",excerpt:"The numbers that predict brand health versus vanity metrics.",date:"May 10",time:"8 min"},
];

const BRANDS = [
  {init:"GL",name:"Glow Labs",cat:"Skincare · Beauty",color:"#1a7a5e",desc:"Science-backed skincare built for real skin. No fillers, no fluff.",articles:14,readers:"42K"},
  {init:"NG",name:"Nomad Goods",cat:"Lifestyle · Travel",color:"#1a4a8a",desc:"Gear built for people who move. Durable, minimal, designed to last.",articles:9,readers:"28K"},
  {init:"LM",name:"LMTD Co.",cat:"Streetwear · Fashion",color:"#9b59b6",desc:"Limited drops. Unlimited identity. Apparel for those who refuse to be average.",articles:21,readers:"61K"},
  {init:"FW",name:"Fieldwork",cat:"Outdoor · Equipment",color:"#c8a84b",desc:"Built for the field. Tested in the wild. Tools that earn their place.",articles:7,readers:"19K"},
];

const PRODUCTS = [
  {emoji:"🌿",bg:"linear-gradient(135deg,#e8f5f0,#c8ede3)",brand:"Glow Labs",name:"Barrier Repair Serum 30ml",price:"$68"},
  {emoji:"🎒",bg:"linear-gradient(135deg,#e8ecf5,#c8d4ed)",brand:"Nomad Goods",name:"The Transit Pack 22L",price:"$145"},
  {emoji:"👕",bg:"linear-gradient(135deg,#f5e8f0,#edd4e8)",brand:"LMTD Co.",name:"Drop 07 Oversized Tee",price:"$54"},
  {emoji:"🔦",bg:"linear-gradient(135deg,#f5f0e0,#ede0b8)",brand:"Fieldwork",name:"Trail Light Pro 800L",price:"$89"},
];

const TAGC = {
  fire:{bg:"rgba(232,64,12,0.09)",color:"#e8400c"},
  jade:{bg:"rgba(26,122,94,0.09)",color:"#1a7a5e"},
  sky:{bg:"rgba(26,74,138,0.09)",color:"#1a4a8a"},
  gold:{bg:"rgba(200,168,75,0.09)",color:"#c8a84b"},
};

// NAV
function Nav({page, go}) {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [page]);
  const links = ["discover","brands","products","pricing"];
  return (
    <>
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:200,background:"rgba(245,240,232,0.96)",backdropFilter:"blur(16px)",borderBottom:"1px solid #d8d3ca"}}>
        <div style={{maxWidth:1300,margin:"0 auto",padding:"0 1.25rem",height:58,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <button onClick={() => go("home")} style={{...syne,fontWeight:800,fontSize:"1.1rem",color:C.ink,background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:"0.4rem"}}>
            <span style={{width:7,height:7,background:C.fire,borderRadius:"50%",display:"inline-block"}} />
            BRANDSPACE
          </button>
          {isMobile ? (
            <button onClick={() => setOpen(!open)} style={{background:"none",border:"none",cursor:"pointer",padding:"0.5rem",fontSize:"1.3rem",color:C.ink}}>
              {open ? "✕" : "☰"}
            </button>
          ) : (
            <div style={{display:"flex",gap:"1.5rem",alignItems:"center"}}>
              {links.map(l => (
                <button key={l} onClick={() => go(l)} style={{...mono,fontSize:"0.58rem",letterSpacing:"0.12em",textTransform:"uppercase",color:page===l?C.ink:C.muted,background:"none",border:"none",borderBottom:page===l?"1px solid #0a0a0a":"1px solid transparent",paddingBottom:2,cursor:"pointer"}}>
                  {l.charAt(0).toUpperCase()+l.slice(1)}
                </button>
              ))}
              <button onClick={() => go("login")} style={{...mono,fontSize:"0.58rem",letterSpacing:"0.1em",textTransform:"uppercase",padding:"0.45rem 0.9rem",border:"1px solid #0a0a0a",background:"none",color:C.ink,cursor:"pointer"}}>Log In</button>
              <button onClick={() => go("signup")} style={{...mono,fontSize:"0.58rem",letterSpacing:"0.1em",textTransform:"uppercase",padding:"0.45rem 0.9rem",background:C.fire,color:"white",border:"none",cursor:"pointer"}}>List Brand</button>
            </div>
          )}
        </div>
      </nav>
      {isMobile && open && (
        <div style={{position:"fixed",top:58,left:0,right:0,bottom:0,zIndex:199,background:C.paper,overflowY:"auto",padding:"1.5rem"}}>
          {links.map(l => (
            <button key={l} onClick={() => go(l)} style={{...syne,fontWeight:700,fontSize:"1.5rem",display:"block",width:"100%",textAlign:"left",padding:"1rem 0",borderBottom:"1px solid #d8d3ca",background:"none",border:"none",cursor:"pointer",color:C.ink}}>
              {l.charAt(0).toUpperCase()+l.slice(1)}
            </button>
          ))}
          <div style={{marginTop:"2rem",display:"flex",flexDirection:"column",gap:"0.75rem"}}>
            <button onClick={() => go("login")} style={{...mono,fontSize:"0.7rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"1rem",border:"1px solid #0a0a0a",background:"none",color:C.ink,cursor:"pointer"}}>Log In</button>
            <button onClick={() => go("signup")} style={{...mono,fontSize:"0.7rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"1rem",background:C.fire,color:"white",border:"none",cursor:"pointer"}}>List Your Brand Free</button>
          </div>
        </div>
      )}
    </>
  );
}

// TICKER
function Ticker() {
  const items = ["Brand Stories","✦","Product Drops","✦","DTC Strategy","✦","Growth Playbooks","✦","Founder Interviews","✦","Launch Guides","✦","Brand Stories","✦","Product Drops","✦","DTC Strategy","✦","Growth Playbooks","✦"];
  return (
    <div style={{background:C.ink,padding:"0.5rem 0",overflow:"hidden",whiteSpace:"nowrap"}}>
      <div style={{display:"inline-block",animation:"marquee 28s linear infinite"}}>
        {items.map((t,i) => (
          <span key={i} style={{...syne,fontWeight:700,fontSize:"0.7rem",letterSpacing:"0.2em",textTransform:"uppercase",color:t==="✦"?C.fire:C.paper,margin:"0 0.75rem"}}>{t}</span>
        ))}
      </div>
    </div>
  );
}

// SECTION HEADER
function SectionHeader({label, title, linkText, onLink}) {
  return (
    <div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:"1.75rem",borderBottom:"1px solid #d8d3ca",paddingBottom:"1rem",flexWrap:"wrap",gap:"0.75rem"}}>
      <div>
        <div style={{...mono,fontSize:"0.56rem",letterSpacing:"0.22em",textTransform:"uppercase",color:C.fire,marginBottom:"0.4rem"}}>{label}</div>
        <h2 style={{...syne,fontWeight:800,fontSize:"clamp(1.6rem,3.5vw,2.8rem)",letterSpacing:"-0.03em",lineHeight:0.95}}>{title}</h2>
      </div>
      {linkText && (
        <button onClick={onLink} style={{...mono,fontSize:"0.58rem",letterSpacing:"0.12em",textTransform:"uppercase",color:C.ink,background:"none",border:"none",borderBottom:"1px solid #d8d3ca",paddingBottom:2,cursor:"pointer",whiteSpace:"nowrap"}}>
          {linkText} →
        </button>
      )}
    </div>
  );
}

// POST CARD
function PostCard({post, go}) {
  const [h, setH] = useState(false);
  const tc = TAGC[post.tag] || TAGC.fire;
  return (
    <button
      onClick={() => go("article", {post})}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{background:h?C.white:C.paper,padding:"1.25rem",textAlign:"left",border:"none",cursor:"pointer",display:"flex",flexDirection:"column",gap:"0.6rem",transition:"background .2s",position:"relative"}}
    >
      <span style={{...mono,fontSize:"0.5rem",color:C.muted,letterSpacing:"0.15em"}}>{post.num}</span>
      <span style={{...mono,fontSize:"0.52rem",letterSpacing:"0.14em",textTransform:"uppercase",padding:"0.18rem 0.5rem",background:tc.bg,color:tc.color,width:"fit-content"}}>{post.cat}</span>
      <h3 style={{...syne,fontWeight:700,fontSize:"clamp(0.9rem,2vw,1.05rem)",letterSpacing:"-0.01em",lineHeight:1.2,color:C.ink}}>{post.title}</h3>
      <p style={{...inst,fontSize:"0.75rem",color:"#666",lineHeight:1.65,flex:1}}>{post.excerpt}</p>
      <div style={{borderTop:"1px solid #d8d3ca",paddingTop:"0.6rem",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div style={{display:"flex",alignItems:"center",gap:"0.4rem"}}>
          <div style={{width:16,height:16,borderRadius:"50%",background:post.bColor,display:"flex",alignItems:"center",justifyContent:"center",...syne,fontSize:"0.4rem",fontWeight:700,color:"white"}}>{post.bInit}</div>
          <span style={{...mono,fontSize:"0.5rem",letterSpacing:"0.08em",color:C.muted}}>{post.brand}</span>
        </div>
        <span style={{...mono,fontSize:"0.48rem",color:C.muted}}>{post.time} · {post.date}</span>
      </div>
      {h && <span style={{position:"absolute",bottom:"1rem",right:"1rem",color:C.fire,fontSize:"0.9rem"}}>→</span>}
    </button>
  );
}

// BRAND CARD
function BrandCard({brand, go}) {
  const [h, setH] = useState(false);
  return (
    <button
      onClick={() => go("brandprofile", {brand})}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{background:h?C.white:C.paper,padding:"1.25rem",textAlign:"left",border:"none",cursor:"pointer",display:"flex",flexDirection:"column",gap:"0.75rem",transition:"background .2s"}}
    >
      <div style={{display:"flex",alignItems:"center",gap:"0.75rem"}}>
        <div style={{width:38,height:38,borderRadius:8,background:brand.color,display:"flex",alignItems:"center",justifyContent:"center",...syne,fontWeight:800,fontSize:"0.8rem",color:"white",flexShrink:0}}>{brand.init}</div>
        <div>
          <div style={{...syne,fontWeight:700,fontSize:"0.9rem"}}>{brand.name}</div>
          <div style={{...mono,fontSize:"0.5rem",letterSpacing:"0.12em",textTransform:"uppercase",color:C.muted}}>{brand.cat}</div>
        </div>
      </div>
      <p style={{...inst,fontSize:"0.75rem",color:"#666",lineHeight:1.6}}>{brand.desc}</p>
      <div style={{display:"flex",gap:"1.25rem"}}>
        {[["Articles",brand.articles],["Readers",brand.readers]].map(([l,v]) => (
          <div key={l}>
            <div style={{...syne,fontWeight:700,fontSize:"0.95rem"}}>{v}</div>
            <div style={{...mono,fontSize:"0.48rem",letterSpacing:"0.1em",textTransform:"uppercase",color:C.muted}}>{l}</div>
          </div>
        ))}
      </div>
      <span style={{...mono,fontSize:"0.48rem",letterSpacing:"0.12em",textTransform:"uppercase",color:C.jade,background:"rgba(26,122,94,0.08)",padding:"0.18rem 0.5rem",width:"fit-content"}}>✓ Verified Brand</span>
    </button>
  );
}

// NEWSLETTER
function NewsletterBlock() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  if (done) return (
    <div style={{background:"rgba(255,255,255,0.15)",padding:"2rem",textAlign:"center"}}>
      <div style={{...syne,fontWeight:700,fontSize:"1.3rem",color:"white",marginBottom:"0.5rem"}}>You're in! 🎉</div>
      <p style={{...inst,color:"rgba(255,255,255,0.7)",fontSize:"0.85rem"}}>First drop lands in your inbox this week.</p>
    </div>
  );
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"0.65rem"}}>
      <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Your name" style={{...inst,background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.25)",color:"white",padding:"0.9rem 1.1rem",fontSize:"0.9rem",outline:"none"}} />
      <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="your@email.com" style={{...inst,background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.25)",color:"white",padding:"0.9rem 1.1rem",fontSize:"0.9rem",outline:"none"}} />
      <button onClick={() => email && setDone(true)} style={{...mono,background:"white",color:C.fire,border:"none",padding:"0.95rem",fontSize:"0.66rem",letterSpacing:"0.14em",textTransform:"uppercase",cursor:"pointer"}}>
        Join 94,000+ Brand Followers →
      </button>
      <span style={{...mono,fontSize:"0.52rem",letterSpacing:"0.1em",color:"rgba(255,255,255,0.4)"}}>No spam. Unsubscribe anytime.</span>
    </div>
  );
}

// FOOTER
function Footer({go}) {
  const isMobile = useIsMobile();
  const cols = [
    ["Platform", ["Discover","Brands","Products","Pricing"], ["discover","brands","products","pricing"]],
    ["For Brands", ["List Brand","Pricing","Log In"], ["signup","pricing","login"]],
    ["Company", ["About","Discover","Privacy"], ["about","discover","discover"]],
  ];
  return (
    <footer style={{background:C.ink,color:C.paper}}>
      <div style={{maxWidth:1300,margin:"0 auto",padding:"3rem 1.5rem 1.5rem"}}>
        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr 1fr":"2fr 1fr 1fr 1fr",gap:"2rem",paddingBottom:"2rem",borderBottom:"1px solid rgba(255,255,255,0.08)"}}>
          <div style={{gridColumn:isMobile?"1/-1":"auto"}}>
            <button onClick={() => go("home")} style={{...syne,fontWeight:800,fontSize:"1.1rem",color:C.paper,background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:"0.4rem",marginBottom:"0.6rem"}}>
              <span style={{width:7,height:7,background:C.fire,borderRadius:"50%",display:"inline-block"}} />
              BRANDSPACE
            </button>
            <p style={{...inst,fontSize:"0.78rem",color:"#666",lineHeight:1.7,maxWidth:240}}>Every brand has a story. This is where they tell it. Community first. Open opportunity.</p>
          </div>
          {cols.map(([title,links,pages]) => (
            <div key={title}>
              <div style={{...mono,fontSize:"0.56rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"#555",marginBottom:"1rem"}}>{title}</div>
              {links.map((l,i) => (
                <button key={l} onClick={() => go(pages[i])} style={{...inst,display:"block",fontSize:"0.78rem",color:"#888",background:"none",border:"none",cursor:"pointer",marginBottom:"0.5rem",textAlign:"left",padding:0}}>{l}</button>
              ))}
            </div>
          ))}
        </div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:"1.5rem",flexWrap:"wrap",gap:"0.5rem"}}>
          <span style={{...mono,fontSize:"0.52rem",letterSpacing:"0.1em",color:"#555"}}>© 2026 BRANDSPACE. All rights reserved.</span>
          <div style={{display:"flex",gap:"1rem",alignItems:"center"}}>
            <button onClick={()=>go("terms")} style={{...mono,fontSize:"0.52rem",letterSpacing:"0.1em",color:"#555",background:"none",border:"none",cursor:"pointer"}}>Terms</button>
            <button onClick={()=>go("privacy")} style={{...mono,fontSize:"0.52rem",letterSpacing:"0.1em",color:"#555",background:"none",border:"none",cursor:"pointer"}}>Privacy</button>
            <button onClick={()=>go("guidelines")} style={{...mono,fontSize:"0.52rem",letterSpacing:"0.1em",color:"#555",background:"none",border:"none",cursor:"pointer"}}>Guidelines</button>
            <button onClick={()=>go("admin")} style={{...mono,fontSize:"0.45rem",letterSpacing:"0.1em",color:"#222",background:"none",border:"none",cursor:"pointer"}}>●</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

// PAYWALL
function Paywall({go}) {
  return (
    <div style={{position:"relative",marginTop:"2rem"}}>
      <div style={{filter:"blur(4px)",pointerEvents:"none",userSelect:"none",opacity:0.5}}>
        <p style={{...inst,fontSize:"1rem",lineHeight:1.85,color:"#333",marginBottom:"1.5rem"}}>The first thing this brand got right was specificity. Instead of launching a full product line, they went all-in on one hero product. In a market flooded with generics, that focus was the differentiator.</p>
        <p style={{...inst,fontSize:"1rem",lineHeight:1.85,color:"#333",marginBottom:"1.5rem"}}>They published three times a week on their brand blog before they had a single sale. Not product posts, real educational content. By launch day, they had 8,000 email subscribers who already trusted them.</p>
        <p style={{...inst,fontSize:"1rem",lineHeight:1.85,color:"#333",marginBottom:"1.5rem"}}>The first drop sold out in 72 hours. They did not restock for three weeks, not because of supply issues, but because scarcity was the strategy.</p>
      </div>
      <div style={{position:"absolute",bottom:0,left:0,right:0,height:"100%",background:"linear-gradient(to bottom,transparent 0%,rgba(245,240,232,0.96) 35%,rgba(245,240,232,1) 100%)",display:"flex",alignItems:"flex-end",justifyContent:"center",paddingBottom:"1.5rem",padding:"0 1rem 1.5rem"}}>
        <div style={{textAlign:"center",maxWidth:400,padding:"1.75rem",background:C.white,border:"1px solid #d8d3ca",boxShadow:"0 4px 24px rgba(0,0,0,0.08)",width:"100%"}}>
          <div style={{fontSize:"1.5rem",marginBottom:"0.5rem"}}>🔒</div>
          <h3 style={{...syne,fontWeight:800,fontSize:"1.1rem",marginBottom:"0.5rem"}}>You have read 50% — join to read the rest</h3>
          <p style={{...inst,fontSize:"0.82rem",color:C.muted,lineHeight:1.65,marginBottom:"1.25rem"}}>Create a free account to unlock the full article and all brand stories.</p>
          <button onClick={() => go("signup")} style={{...mono,fontSize:"0.66rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.9rem",background:C.fire,color:"white",border:"none",cursor:"pointer",width:"100%",marginBottom:"0.6rem"}}>Sign Up Free →</button>
          <button onClick={() => go("login")} style={{...mono,fontSize:"0.66rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.9rem",background:"none",color:C.ink,border:"1px solid #d8d3ca",cursor:"pointer",width:"100%"}}>Log In</button>
          <div style={{...mono,fontSize:"0.52rem",color:C.muted,letterSpacing:"0.1em",marginTop:"0.75rem"}}>Free forever · No credit card required</div>
        </div>
      </div>
    </div>
  );
}

// HOME PAGE
function Home({go}) {
  const isMobile = useIsMobile();
  return (
    <div style={{paddingTop:58}}>

      {/* HERO */}
      <div style={{maxWidth:1300,margin:"0 auto",padding:isMobile?"3rem 1.25rem 2.5rem":"5rem 2rem 4rem",display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 440px",gap:isMobile?"2rem":"4rem",alignItems:"center"}}>
        <div>
          <div style={{...mono,fontSize:"0.58rem",letterSpacing:"0.25em",textTransform:"uppercase",color:C.fire,marginBottom:"1.25rem",display:"flex",alignItems:"center",gap:"0.6rem"}}>
            <span style={{width:20,height:1,background:C.fire,display:"inline-block"}} />
            The Brand Publishing Platform
          </div>
          <h1 style={{...syne,fontWeight:800,fontSize:isMobile?"clamp(2.8rem,11vw,4rem)":"clamp(3.5rem,6.5vw,6rem)",lineHeight:0.92,letterSpacing:"-0.03em",marginBottom:"1.5rem"}}>
            EVERY BRAND<br />
            <span style={{color:C.fire}}>HAS A</span><br />
            <span style={{WebkitTextStroke:"1.5px #0a0a0a",color:"transparent"}}>STORY.</span>
          </h1>
          <p style={{...inst,fontSize:isMobile?"0.9rem":"1rem",color:"#555",lineHeight:1.75,maxWidth:460,marginBottom:"0.75rem"}}>
            This is where they tell it. The publishing platform built for brand owners — publish your story, showcase your products, grow your audience. Free to start.
          </p>
          <p style={{...inst,fontSize:"0.85rem",color:C.fire,fontStyle:"italic",marginBottom:"2rem"}}>Community first. Opportunity open to everyone.</p>
          <div style={{display:"flex",flexDirection:isMobile?"column":"row",gap:"0.75rem",marginBottom:"2.5rem"}}>
            <button onClick={() => go("signup")} style={{...mono,fontSize:"0.68rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"1rem 1.75rem",background:C.ink,color:C.paper,border:"none",cursor:"pointer",width:isMobile?"100%":"auto"}}>List Your Brand — Free</button>
            <button onClick={() => go("discover")} style={{...mono,fontSize:"0.68rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"1rem 1.75rem",background:"none",color:C.ink,border:"1px solid #d8d3ca",cursor:"pointer",width:isMobile?"100%":"auto"}}>Explore Stories →</button>
          </div>
          <div style={{display:"flex",gap:isMobile?"1.5rem":"3rem"}}>
            {[["2.4K+","Brands"],["180K","Readers"],["94K","Subscribers"]].map(([v,l]) => (
              <div key={l}>
                <div style={{...syne,fontWeight:700,fontSize:isMobile?"1.4rem":"1.8rem",letterSpacing:"-0.03em"}}>{v}</div>
                <div style={{...mono,fontSize:"0.52rem",letterSpacing:"0.12em",textTransform:"uppercase",color:C.muted,marginTop:2}}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {!isMobile && (
          <div style={{display:"flex",flexDirection:"column",gap:"0.75rem"}}>
            <button onClick={() => go("article", {post:POSTS[1]})} style={{background:C.ink,padding:"2rem",textAlign:"left",border:"none",cursor:"pointer",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",bottom:-40,right:-40,width:160,height:160,background:"radial-gradient(circle,rgba(232,64,12,0.35),transparent 70%)",pointerEvents:"none"}} />
              <div style={{position:"relative",zIndex:1}}>
                <div style={{...mono,fontSize:"0.54rem",letterSpacing:"0.18em",textTransform:"uppercase",background:C.fire,color:"white",padding:"0.22rem 0.55rem",display:"inline-block",marginBottom:"0.85rem"}}>✦ Featured Story</div>
                <h2 style={{...syne,fontWeight:700,fontSize:"1.5rem",letterSpacing:"-0.02em",lineHeight:1.1,color:"white",marginBottom:"0.65rem"}}>How This Skincare Brand Hit $1M in Year One</h2>
                <p style={{...inst,fontSize:"0.8rem",color:"#aaa",lineHeight:1.65,marginBottom:"1rem"}}>No funding. No connections. Just a brilliant product and a story worth telling.</p>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:"0.65rem"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"0.5rem"}}>
                    <div style={{width:20,height:20,borderRadius:"50%",background:C.jade,display:"flex",alignItems:"center",justifyContent:"center",...syne,fontSize:"0.48rem",fontWeight:700,color:"white"}}>GL</div>
                    <span style={{...mono,fontSize:"0.52rem",color:"#888",letterSpacing:"0.08em"}}>Glow Labs · Verified</span>
                  </div>
                  <span style={{...mono,fontSize:"0.5rem",color:"#666"}}>8 min</span>
                </div>
              </div>
            </button>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.65rem"}}>
              {POSTS.slice(0,4).map(p => (
                <button key={p.id} onClick={() => go("article", {post:p})} style={{background:C.paper2,border:"1px solid #d8d3ca",padding:"0.9rem",textAlign:"left",cursor:"pointer",display:"flex",flexDirection:"column",gap:"0.3rem",transition:"background .2s"}}
                  onMouseEnter={e => e.currentTarget.style.background=C.white}
                  onMouseLeave={e => e.currentTarget.style.background=C.paper2}>
                  <span style={{...mono,fontSize:"0.5rem",letterSpacing:"0.14em",textTransform:"uppercase",color:C.fire}}>{p.cat}</span>
                  <span style={{...syne,fontWeight:600,fontSize:"0.82rem",letterSpacing:"-0.01em",lineHeight:1.2,color:C.ink}}>{p.title}</span>
                  <span style={{...mono,fontSize:"0.48rem",color:C.muted,letterSpacing:"0.08em"}}>{p.brand.toUpperCase()}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <Ticker />

      {/* MISSION */}
      <div style={{background:C.paper2,borderTop:"1px solid #d8d3ca",borderBottom:"1px solid #d8d3ca",padding:isMobile?"2rem 1.25rem":"3rem 2rem"}}>
        <div style={{maxWidth:860,margin:"0 auto",textAlign:"center"}}>
          <p style={{...syne,fontWeight:700,fontSize:isMobile?"clamp(1rem,4.5vw,1.3rem)":"clamp(1.2rem,2.5vw,1.8rem)",letterSpacing:"-0.02em",lineHeight:1.5,color:C.ink}}>
            "Most platforms were built to extract. Not to empower.{" "}
            <span style={{color:C.fire}}>BRANDSPACE was built different.</span>"
          </p>
          <div style={{...mono,fontSize:"0.56rem",letterSpacing:"0.2em",textTransform:"uppercase",color:C.muted,marginTop:"1rem"}}>Community First · Open Opportunity · Real Stories</div>
        </div>
      </div>

      {/* POSTS */}
      <div style={{maxWidth:1300,margin:"0 auto",padding:isMobile?"2.5rem 1.25rem":"5rem 2rem"}}>
        <SectionHeader label="From the Journal" title="LATEST STORIES" linkText="View all" onLink={() => go("discover")} />
        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(3,1fr)",gap:1,background:"#d8d3ca"}}>
          {POSTS.map(p => <PostCard key={p.id} post={p} go={go} />)}
        </div>
      </div>

      {/* BRANDS */}
      <div style={{background:C.paper2}}>
        <div style={{maxWidth:1300,margin:"0 auto",padding:isMobile?"2.5rem 1.25rem":"5rem 2rem"}}>
          <SectionHeader label="Brand Directory" title="FEATURED BRANDS" linkText="Browse all" onLink={() => go("brands")} />
          <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr 1fr":"repeat(4,1fr)",gap:1,background:"#d8d3ca"}}>
            {BRANDS.map(b => <BrandCard key={b.name} brand={b} go={go} />)}
          </div>
        </div>
      </div>

      {/* PRODUCTS */}
      <div style={{maxWidth:1300,margin:"0 auto",padding:isMobile?"2.5rem 1.25rem":"5rem 2rem"}}>
        <SectionHeader label="Shop the Platform" title="FEATURED PRODUCTS" linkText="Browse all" onLink={() => go("products")} />
        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr 1fr":"repeat(4,1fr)",gap:isMobile?"0.75rem":"1.25rem"}}>
          {PRODUCTS.map(p => (
            <button key={p.name} onClick={() => go("products")} style={{border:"1px solid #d8d3ca",background:C.white,display:"flex",flexDirection:"column",overflow:"hidden",cursor:"pointer",textAlign:"left",transition:"all .25s"}}
              onMouseEnter={e => { e.currentTarget.style.borderColor=C.ink; e.currentTarget.style.transform="translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor="#d8d3ca"; e.currentTarget.style.transform="none"; }}>
              <div style={{height:isMobile?110:160,display:"flex",alignItems:"center",justifyContent:"center",fontSize:isMobile?"2rem":"2.5rem",background:p.bg}}>{p.emoji}</div>
              <div style={{padding:isMobile?"0.75rem":"1.1rem",display:"flex",flexDirection:"column",gap:"0.3rem"}}>
                <span style={{...mono,fontSize:"0.5rem",letterSpacing:"0.12em",textTransform:"uppercase",color:C.muted}}>{p.brand}</span>
                <span style={{...syne,fontWeight:600,fontSize:isMobile?"0.78rem":"0.88rem",letterSpacing:"-0.01em",lineHeight:1.2}}>{p.name}</span>
                <div style={{borderTop:"1px solid #d8d3ca",paddingTop:"0.5rem",marginTop:"0.3rem",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <span style={{...syne,fontWeight:700,fontSize:isMobile?"0.85rem":"0.95rem"}}>{p.price}</span>
                  <span style={{...mono,fontSize:"0.5rem",letterSpacing:"0.1em",textTransform:"uppercase",color:C.fire}}>Shop →</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* FOR BRANDS */}
      <div style={{background:C.ink,padding:isMobile?"2.5rem 1.25rem":"5rem 2rem"}}>
        <div style={{maxWidth:1300,margin:"0 auto",display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:isMobile?"2.5rem":"6rem",alignItems:"center"}}>
          <div>
            <div style={{...mono,fontSize:"0.58rem",letterSpacing:"0.22em",textTransform:"uppercase",color:C.fire,marginBottom:"0.85rem"}}>For Brands</div>
            <h2 style={{...syne,fontWeight:800,fontSize:isMobile?"clamp(2rem,8vw,2.8rem)":"clamp(2.5rem,4vw,4rem)",letterSpacing:"-0.03em",lineHeight:0.95,color:C.paper,marginBottom:"1.25rem"}}>
              YOUR BRAND.<br />YOUR STORY.<br /><span style={{color:C.fire}}>YOUR SPACE.</span>
            </h2>
            <p style={{...inst,fontSize:"0.9rem",color:"#888",lineHeight:1.75,marginBottom:"1.75rem"}}>Not just another platform taking your money. A community built on open opportunity where every brand has a real shot.</p>
            <div style={{display:"flex",flexDirection:isMobile?"column":"row",gap:"0.75rem"}}>
              <button onClick={() => go("signup")} style={{...mono,fontSize:"0.68rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.9rem 1.75rem",background:C.fire,color:"white",border:"none",cursor:"pointer",width:isMobile?"100%":"auto"}}>List Your Brand Free →</button>
              <button onClick={() => go("pricing")} style={{...mono,fontSize:"0.68rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.9rem 1.75rem",background:"none",color:C.paper,border:"1px solid rgba(255,255,255,0.2)",cursor:"pointer",width:isMobile?"100%":"auto"}}>View Plans</button>
            </div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1px",background:"rgba(255,255,255,0.06)"}}>
            {[
              ["✦","Free to start","No credit card required to list your brand"],
              ["◈","Community first","Not a cash cow. A platform that actually cares"],
              ["◉","Real exposure","180K monthly readers discovering brands like yours"],
              ["⬡","Open to all","Fashion, beauty, food, tech — all brands welcome"],
            ].map(([icon,title,desc]) => (
              <div key={title} style={{background:"rgba(255,255,255,0.02)",padding:isMobile?"1.25rem":"1.75rem"}}>
                <div style={{fontSize:"1.1rem",color:C.fire,marginBottom:"0.6rem"}}>{icon}</div>
                <div style={{...syne,fontWeight:700,fontSize:"0.9rem",color:C.paper,marginBottom:"0.4rem"}}>{title}</div>
                <div style={{...inst,fontSize:"0.75rem",color:"#666",lineHeight:1.6}}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div style={{background:C.fire}}>
        <div style={{maxWidth:1300,margin:"0 auto",padding:isMobile?"2.5rem 1.25rem":"5rem 2rem",display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:isMobile?"2rem":"5rem",alignItems:"center"}}>
          <div>
            <h2 style={{...syne,fontWeight:800,fontSize:isMobile?"clamp(2rem,8vw,2.8rem)":"clamp(2.5rem,5vw,4rem)",letterSpacing:"-0.03em",lineHeight:0.92,color:"white"}}>THE WEEKLY<br />BRAND DROP</h2>
            <p style={{...inst,color:"rgba(255,255,255,0.7)",fontSize:"0.9rem",marginTop:"1rem",lineHeight:1.7}}>One email every week. The sharpest brand strategies, hottest product launches, and platform highlights.</p>
          </div>
          <NewsletterBlock />
        </div>
      </div>

    </div>
  );
}

// DISCOVER PAGE
function Discover({go}) {
  const isMobile = useIsMobile();
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const cats = ["All","Growth","Launch","Brand","Operations","Marketing","Finance"];
  const filtered = POSTS.filter(p => {
    const mc = active === "All" || p.cat === active;
    const ms = p.title.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase());
    return mc && ms;
  });
  const count = filtered.length;
  return (
    <div style={{paddingTop:58,minHeight:"100vh"}}>
      <div style={{background:C.paper2,borderBottom:"1px solid #d8d3ca",padding:isMobile?"2rem 1.25rem 1.25rem":"3rem 2rem 1.5rem"}}>
        <div style={{maxWidth:1300,margin:"0 auto"}}>
          <div style={{...mono,fontSize:"0.58rem",letterSpacing:"0.22em",textTransform:"uppercase",color:C.fire,marginBottom:"0.6rem"}}>The Journal</div>
          <div style={{display:"flex",alignItems:isMobile?"flex-start":"flex-end",justifyContent:"space-between",marginBottom:"1.5rem",flexDirection:isMobile?"column":"row",gap:"1rem"}}>
            <h1 style={{...syne,fontWeight:800,fontSize:isMobile?"clamp(2rem,8vw,2.8rem)":"clamp(2.5rem,5vw,4rem)",letterSpacing:"-0.03em",lineHeight:0.95}}>DISCOVER<br />ALL STORIES</h1>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search articles or brands..." style={{...mono,fontSize:"0.65rem",padding:"0.7rem 1rem",border:"1px solid #d8d3ca",background:C.white,outline:"none",width:isMobile?"100%":"260px",letterSpacing:"0.06em"}} />
          </div>
          <div style={{display:"flex",gap:"0.5rem",overflowX:"auto",paddingBottom:"0.25rem",WebkitOverflowScrolling:"touch"}}>
            {cats.map(c => (
              <button key={c} onClick={() => setActive(c)} style={{...mono,fontSize:"0.56rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.4rem 0.85rem",border:active===c?"1px solid #0a0a0a":"1px solid #d8d3ca",background:active===c?C.ink:"transparent",color:active===c?C.paper:C.muted,cursor:"pointer",transition:"all .2s",whiteSpace:"nowrap",flexShrink:0}}>{c}</button>
            ))}
          </div>
        </div>
      </div>

      <div style={{background:C.ink,padding:isMobile?"0.85rem 1.25rem":"1.25rem 2rem"}}>
        <div style={{maxWidth:1300,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"1rem",flexWrap:"wrap"}}>
          <div style={{display:"flex",alignItems:"center",gap:isMobile?"0.75rem":"1.5rem",flexWrap:"wrap"}}>
            <span style={{...mono,fontSize:"0.52rem",letterSpacing:"0.15em",textTransform:"uppercase",background:C.fire,color:"white",padding:"0.18rem 0.55rem",flexShrink:0}}>✦ Featured Brand</span>
            <div style={{display:"flex",alignItems:"center",gap:"0.65rem"}}>
              <div style={{width:28,height:28,borderRadius:6,background:C.jade,display:"flex",alignItems:"center",justifyContent:"center",...syne,fontWeight:700,fontSize:"0.62rem",color:"white"}}>GL</div>
              <div>
                <div style={{...syne,fontWeight:700,fontSize:"0.85rem",color:C.paper}}>Glow Labs</div>
                <div style={{...mono,fontSize:"0.48rem",letterSpacing:"0.1em",color:"#666"}}>SKINCARE · BEAUTY</div>
              </div>
            </div>
          </div>
          <button onClick={() => go("brandprofile", {brand:BRANDS[0]})} style={{...mono,fontSize:"0.56rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.55rem 1rem",background:"none",color:C.paper,border:"1px solid rgba(255,255,255,0.2)",cursor:"pointer",flexShrink:0}}>View Brand →</button>
        </div>
      </div>

      <div style={{maxWidth:1300,margin:"0 auto",padding:isMobile?"1rem 1.25rem 0":"1.25rem 2rem 0"}}>
        <div style={{...mono,fontSize:"0.56rem",letterSpacing:"0.12em",color:C.muted,textTransform:"uppercase"}}>
          {count} {count === 1 ? "article" : "articles"}
          {active !== "All" ? " in " + active : ""}
          {search ? " matching " + search : ""}
        </div>
      </div>

      <div style={{maxWidth:1300,margin:"0 auto",padding:isMobile?"1rem 1.25rem 3rem":"1.5rem 2rem 5rem"}}>
        {filtered.length > 0 ? (
          <>
            <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(3,1fr)",gap:1,background:"#d8d3ca"}}>
              {filtered.map(p => <PostCard key={p.id} post={p} go={go} />)}
            </div>
            <div style={{textAlign:"center",marginTop:"2.5rem"}}>
              <button style={{...mono,fontSize:"0.66rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.9rem 2.5rem",background:"none",color:C.ink,border:"1px solid #d8d3ca",cursor:"pointer"}}>Load More Articles →</button>
            </div>
          </>
        ) : (
          <div style={{textAlign:"center",padding:"4rem 1rem"}}>
            <div style={{fontSize:"2rem",marginBottom:"0.75rem"}}>🔍</div>
            <h3 style={{...syne,fontWeight:700,fontSize:"1.3rem",marginBottom:"0.5rem"}}>No articles found</h3>
            <p style={{...inst,color:C.muted,marginBottom:"1.25rem",fontSize:"0.88rem"}}>Try a different search or category</p>
            <button onClick={() => { setSearch(""); setActive("All"); }} style={{...mono,fontSize:"0.62rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.75rem 1.5rem",background:C.ink,color:C.paper,border:"none",cursor:"pointer"}}>Clear Filters</button>
          </div>
        )}
        <div style={{marginTop:"3rem",background:C.paper2,border:"1px solid #d8d3ca",padding:isMobile?"1.5rem":"2.5rem",display:"flex",alignItems:isMobile?"flex-start":"center",justifyContent:"space-between",gap:"1.5rem",flexDirection:isMobile?"column":"row"}}>
          <div>
            <div style={{...mono,fontSize:"0.56rem",letterSpacing:"0.15em",textTransform:"uppercase",color:C.fire,marginBottom:"0.4rem"}}>For Brands</div>
            <h3 style={{...syne,fontWeight:700,fontSize:isMobile?"1.1rem":"1.3rem",letterSpacing:"-0.02em",marginBottom:"0.4rem"}}>Feature your brand on the Discover page</h3>
            <p style={{...inst,fontSize:"0.82rem",color:C.muted}}>Get in front of 180K monthly readers for just <strong style={{color:C.fire}}>$5 for 7 days</strong>.</p>
          </div>
          <button onClick={() => go("signup")} style={{...mono,fontSize:"0.66rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.9rem 1.5rem",background:C.fire,color:"white",border:"none",cursor:"pointer",whiteSpace:"nowrap",width:isMobile?"100%":"auto"}}>Feature My Brand — $5 →</button>
        </div>
      </div>
    </div>
  );
}

// ARTICLE PAGE
function ArticlePage({post, go}) {
  const isMobile = useIsMobile();
  const [showWall, setShowWall] = useState(false);
  const p = post || POSTS[0];
  const tc = TAGC[p.tag] || TAGC.fire;
  useEffect(() => {
    const t = setTimeout(() => setShowWall(true), 800);
    return () => clearTimeout(t);
  }, []);
  return (
    <div style={{paddingTop:58,minHeight:"100vh"}}>
      <div style={{maxWidth:720,margin:"0 auto",padding:isMobile?"2rem 1.25rem":"3.5rem 2rem"}}>
        <button onClick={() => go("discover")} style={{...mono,fontSize:"0.58rem",letterSpacing:"0.15em",textTransform:"uppercase",color:C.muted,background:"none",border:"none",cursor:"pointer",marginBottom:"2rem",display:"flex",alignItems:"center",gap:"0.5rem"}}>← Back to Journal</button>
        <div style={{display:"flex",alignItems:"center",gap:"0.75rem",margin:"1.5rem 0 1.25rem"}}>
          <span style={{...mono,fontSize:"0.56rem",letterSpacing:"0.14em",textTransform:"uppercase",padding:"0.18rem 0.55rem",background:tc.bg,color:tc.color}}>{p.cat}</span>
          <span style={{...mono,fontSize:"0.54rem",color:C.muted}}>· {p.time} read</span>
        </div>
        <h1 style={{...syne,fontWeight:800,fontSize:isMobile?"clamp(1.6rem,6vw,2.2rem)":"clamp(2rem,4vw,3rem)",letterSpacing:"-0.03em",lineHeight:1.05,marginBottom:"1.25rem"}}>{p.title}</h1>
        <div style={{display:"flex",alignItems:"center",gap:"0.85rem",paddingBottom:"1.75rem",borderBottom:"1px solid #d8d3ca",marginBottom:"2rem"}}>
          <div style={{width:34,height:34,borderRadius:"50%",background:p.bColor,display:"flex",alignItems:"center",justifyContent:"center",...syne,fontWeight:700,fontSize:"0.65rem",color:"white"}}>{p.bInit}</div>
          <div>
            <div style={{...syne,fontWeight:600,fontSize:"0.88rem"}}>{p.brand}</div>
            <div style={{...mono,fontSize:"0.52rem",letterSpacing:"0.1em",color:C.muted}}>{p.date}, 2026 · Verified Brand</div>
          </div>
        </div>
        <p style={{...inst,fontSize:isMobile?"0.92rem":"1rem",lineHeight:1.85,color:C.ink,marginBottom:"1.5rem",fontWeight:500}}>No investors. No PR agency. No influencer budget. Just a founder with a clear problem, a formula that worked, and the discipline to tell that story every single day.</p>
        <p style={{...inst,fontSize:isMobile?"0.92rem":"1rem",lineHeight:1.85,color:C.ink,marginBottom:"1.5rem",fontWeight:500}}>The first thing this brand got right was specificity. Instead of launching a full product line, they went all-in on one hero product. In a market flooded with generics, that focus was the differentiator.</p>
        <p style={{...inst,fontSize:isMobile?"0.92rem":"1rem",lineHeight:1.85,color:C.ink,marginBottom:"1.5rem",fontWeight:500}}>They published three times a week on their brand blog before they had a single sale. Not product posts — real educational content. By launch day, they had 8,000 email subscribers who already trusted them.</p>
        {showWall ? <Paywall go={go} /> : (
          <div>
            <p style={{...inst,fontSize:isMobile?"0.92rem":"1rem",lineHeight:1.85,color:"#333",marginBottom:"1.5rem"}}>The first drop sold out in 72 hours. They did not restock for three weeks, not because of supply issues, but because scarcity was the strategy.</p>
            <p style={{...inst,fontSize:isMobile?"0.92rem":"1rem",lineHeight:1.85,color:"#333",marginBottom:"1.5rem"}}>Year one revenue: $1.2M. No paid ads until month nine. The lesson is not that ads do not work — it is that an audience built on trust converts at a rate ads can never match.</p>
          </div>
        )}
      </div>
    </div>
  );
}

// BRAND DIRECTORY
function Brands({go}) {
  const isMobile = useIsMobile();
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const niches = ["All","Fashion","Beauty","Lifestyle","Food","Tech","Outdoor","Home","Fitness","Other"];

  const allBrands = [
    {init:"GL",name:"Glow Labs",cat:"Beauty",color:"#1a7a5e",desc:"Science-backed skincare built for real skin. No fillers, no fluff — just formulas that work.",articles:14,readers:"42K",featured:true},
    {init:"NG",name:"Nomad Goods",cat:"Lifestyle",color:"#1a4a8a",desc:"Gear built for people who move. Durable, minimal, and designed to last the distance.",articles:9,readers:"28K",featured:false},
    {init:"LM",name:"LMTD Co.",cat:"Fashion",color:"#9b59b6",desc:"Limited drops. Unlimited identity. Apparel for those who refuse to be average.",articles:21,readers:"61K",featured:true},
    {init:"FW",name:"Fieldwork",cat:"Outdoor",color:"#c8a84b",desc:"Built for the field. Tested in the wild. Tools that earn their place in your pack.",articles:7,readers:"19K",featured:false},
    {init:"RS",name:"Rune Studio",cat:"Home",color:"#e8400c",desc:"Objects with intention. Minimal design for spaces that reflect who you are.",articles:11,readers:"33K",featured:false},
    {init:"KB",name:"Kova Brand",cat:"Food",color:"#e67e22",desc:"Functional nutrition without compromise. Clean ingredients, honest labels, real results.",articles:5,readers:"14K",featured:false},
    {init:"AX",name:"Axon Wear",cat:"Fitness",color:"#2c3e50",desc:"Performance wear engineered for athletes who don't need to announce it.",articles:8,readers:"22K",featured:false},
    {init:"PL",name:"Pluma",cat:"Fashion",color:"#8e44ad",desc:"Premium paper goods and apparel for people who still believe in the details.",articles:4,readers:"9K",featured:false},
  ];

  const filtered = allBrands.filter(b => {
    const ms = b.name.toLowerCase().includes(search.toLowerCase()) || b.cat.toLowerCase().includes(search.toLowerCase()) || b.desc.toLowerCase().includes(search.toLowerCase());
    const mf = activeFilter === "All" || b.cat === activeFilter;
    return ms && mf;
  });

  const featured = filtered.filter(b => b.featured);
  const regular = filtered.filter(b => !b.featured);

  return (
    <div style={{paddingTop:58,minHeight:"100vh",background:C.paper}}>

      {/* HEADER */}
      <div style={{background:C.paper2,borderBottom:"1px solid #d8d3ca",padding:isMobile?"2rem 1.25rem 1.25rem":"3rem 2rem 1.5rem"}}>
        <div style={{maxWidth:1300,margin:"0 auto"}}>
          <div style={{...mono,fontSize:"0.58rem",letterSpacing:"0.22em",textTransform:"uppercase",color:C.fire,marginBottom:"0.6rem"}}>Brand Directory</div>
          <div style={{display:"flex",alignItems:isMobile?"flex-start":"flex-end",justifyContent:"space-between",marginBottom:"1.5rem",flexDirection:isMobile?"column":"row",gap:"1rem"}}>
            <h1 style={{...syne,fontWeight:800,fontSize:isMobile?"clamp(2rem,8vw,2.8rem)":"clamp(2.5rem,5vw,4rem)",letterSpacing:"-0.03em",lineHeight:0.95,color:C.ink}}>
              DISCOVER<br />ALL BRANDS
            </h1>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search brands..." style={{...mono,fontSize:"0.65rem",padding:"0.7rem 1rem",border:"1px solid #d8d3ca",background:C.white,outline:"none",width:isMobile?"100%":"240px",letterSpacing:"0.06em"}} />
          </div>
          {/* Niche filters */}
          <div style={{display:"flex",gap:"0.5rem",overflowX:"auto",paddingBottom:"0.25rem",WebkitOverflowScrolling:"touch"}}>
            {niches.map(n => (
              <button key={n} onClick={() => setActiveFilter(n)} style={{...mono,fontSize:"0.56rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.4rem 0.85rem",border:activeFilter===n?"1px solid #0a0a0a":"1px solid #d8d3ca",background:activeFilter===n?C.ink:"transparent",color:activeFilter===n?C.paper:C.muted,cursor:"pointer",transition:"all .2s",whiteSpace:"nowrap",flexShrink:0}}>{n}</button>
            ))}
          </div>
        </div>
      </div>

      <div style={{maxWidth:1300,margin:"0 auto",padding:isMobile?"1.5rem 1.25rem 3rem":"2rem 2rem 5rem"}}>

        {/* FEATURED BRANDS */}
        {featured.length > 0 && (
          <div style={{marginBottom:"3rem"}}>
            <div style={{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"1.25rem"}}>
              <span style={{...mono,fontSize:"0.56rem",letterSpacing:"0.18em",textTransform:"uppercase",background:C.fire,color:"white",padding:"0.2rem 0.6rem"}}>✦ Featured Brands</span>
              <span style={{...mono,fontSize:"0.54rem",color:C.muted,letterSpacing:"0.1em"}}>Promoted placement</span>
            </div>
            <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"1fr 1fr",gap:1,background:"#d8d3ca"}}>
              {featured.map(b => (
                <button key={b.name} onClick={() => go("brandprofile",{brand:b})}
                  style={{background:C.ink,padding:"2rem",textAlign:"left",border:"none",cursor:"pointer",display:"flex",flexDirection:"column",gap:"1rem",position:"relative",overflow:"hidden"}}
                  onMouseEnter={e => e.currentTarget.style.background="#1a1a1a"}
                  onMouseLeave={e => e.currentTarget.style.background=C.ink}>
                  <div style={{position:"absolute",top:0,right:0,bottom:0,width:3,background:C.fire}} />
                  <div style={{display:"flex",alignItems:"center",gap:"0.85rem"}}>
                    <div style={{width:44,height:44,borderRadius:8,background:b.color,display:"flex",alignItems:"center",justifyContent:"center",...syne,fontWeight:800,fontSize:"0.9rem",color:"white",flexShrink:0}}>{b.init}</div>
                    <div>
                      <div style={{...syne,fontWeight:700,fontSize:"1rem",color:C.paper}}>{b.name}</div>
                      <div style={{...mono,fontSize:"0.52rem",letterSpacing:"0.12em",textTransform:"uppercase",color:"#666"}}>{b.cat}</div>
                    </div>
                    <span style={{...mono,fontSize:"0.48rem",letterSpacing:"0.12em",textTransform:"uppercase",color:C.jade,background:"rgba(26,122,94,0.15)",padding:"0.2rem 0.5rem",marginLeft:"auto"}}>✓ Verified</span>
                  </div>
                  <p style={{...inst,fontSize:"0.82rem",color:"#aaa",lineHeight:1.65}}>{b.desc}</p>
                  <div style={{display:"flex",gap:"2rem",borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:"1rem"}}>
                    {[["Articles",b.articles],["Readers",b.readers]].map(([l,v]) => (
                      <div key={l}>
                        <div style={{...syne,fontWeight:700,fontSize:"1.1rem",color:C.paper}}>{v}</div>
                        <div style={{...mono,fontSize:"0.5rem",letterSpacing:"0.1em",textTransform:"uppercase",color:"#555"}}>{l}</div>
                      </div>
                    ))}
                    <div style={{marginLeft:"auto",...mono,fontSize:"0.56rem",color:C.fire,letterSpacing:"0.1em",alignSelf:"flex-end"}}>View Brand →</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ALL BRANDS */}
        <div style={{...mono,fontSize:"0.56rem",letterSpacing:"0.12em",color:C.muted,textTransform:"uppercase",marginBottom:"1.25rem"}}>
          {filtered.length} {filtered.length === 1 ? "brand" : "brands"}
          {activeFilter !== "All" ? " in " + activeFilter : ""}
          {search ? " matching " + search : ""}
        </div>

        {filtered.length > 0 ? (
          <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(2,1fr)",gap:1,background:"#d8d3ca"}}>
            {regular.map(b => (
              <button key={b.name} onClick={() => go("brandprofile",{brand:b})}
                style={{background:C.paper,padding:"1.5rem",textAlign:"left",border:"none",cursor:"pointer",display:"flex",flexDirection:"column",gap:"0.85rem",transition:"background .2s"}}
                onMouseEnter={e => e.currentTarget.style.background=C.white}
                onMouseLeave={e => e.currentTarget.style.background=C.paper}>
                <div style={{display:"flex",alignItems:"center",gap:"0.85rem"}}>
                  <div style={{width:42,height:42,borderRadius:8,background:b.color,display:"flex",alignItems:"center",justifyContent:"center",...syne,fontWeight:800,fontSize:"0.85rem",color:"white",flexShrink:0}}>{b.init}</div>
                  <div style={{flex:1}}>
                    <div style={{...syne,fontWeight:700,fontSize:"0.95rem",color:C.ink}}>{b.name}</div>
                    <div style={{...mono,fontSize:"0.5rem",letterSpacing:"0.12em",textTransform:"uppercase",color:C.muted}}>{b.cat}</div>
                  </div>
                  <span style={{...mono,fontSize:"0.48rem",letterSpacing:"0.1em",textTransform:"uppercase",color:C.jade,background:"rgba(26,122,94,0.08)",padding:"0.18rem 0.45rem"}}>✓ Verified</span>
                </div>
                <p style={{...inst,fontSize:"0.78rem",color:"#444",lineHeight:1.65}}>{b.desc}</p>
                <div style={{display:"flex",gap:"1.5rem",borderTop:"1px solid #d8d3ca",paddingTop:"0.85rem",alignItems:"center"}}>
                  {[["Articles",b.articles],["Readers",b.readers]].map(([l,v]) => (
                    <div key={l}>
                      <div style={{...syne,fontWeight:700,fontSize:"0.95rem",color:C.ink}}>{v}</div>
                      <div style={{...mono,fontSize:"0.48rem",letterSpacing:"0.1em",textTransform:"uppercase",color:C.muted}}>{l}</div>
                    </div>
                  ))}
                  <span style={{...mono,fontSize:"0.54rem",color:C.fire,letterSpacing:"0.1em",marginLeft:"auto"}}>View →</span>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div style={{textAlign:"center",padding:"4rem 1rem"}}>
            <div style={{fontSize:"2rem",marginBottom:"0.75rem"}}>🔍</div>
            <h3 style={{...syne,fontWeight:700,fontSize:"1.3rem",marginBottom:"0.5rem",color:C.ink}}>No brands found</h3>
            <p style={{...inst,color:C.muted,marginBottom:"1.25rem",fontSize:"0.88rem"}}>Try a different search or category</p>
            <button onClick={() => { setSearch(""); setActiveFilter("All"); }} style={{...mono,fontSize:"0.62rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.75rem 1.5rem",background:C.ink,color:C.paper,border:"none",cursor:"pointer"}}>Clear Filters</button>
          </div>
        )}

        {/* LIST YOUR BRAND CTA */}
        <div style={{marginTop:"3rem",background:C.ink,padding:isMobile?"2rem 1.5rem":"3rem",display:"flex",alignItems:isMobile?"flex-start":"center",justifyContent:"space-between",gap:"1.5rem",flexDirection:isMobile?"column":"row"}}>
          <div>
            <div style={{...mono,fontSize:"0.56rem",letterSpacing:"0.15em",textTransform:"uppercase",color:C.fire,marginBottom:"0.5rem"}}>Is your brand missing?</div>
            <h3 style={{...syne,fontWeight:700,fontSize:isMobile?"1.2rem":"1.5rem",letterSpacing:"-0.02em",color:C.paper,marginBottom:"0.4rem"}}>Join 2,400+ brands already on the platform</h3>
            <p style={{...inst,fontSize:"0.82rem",color:"#666",lineHeight:1.6}}>Free to start. Get your brand in front of 180K monthly readers.</p>
          </div>
          <button onClick={() => go("signup")} style={{...mono,fontSize:"0.68rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.9rem 1.75rem",background:C.fire,color:"white",border:"none",cursor:"pointer",whiteSpace:"nowrap",width:isMobile?"100%":"auto"}}>List Your Brand Free →</button>
        </div>

        {/* FEATURE YOUR BRAND CTA */}
        <div style={{marginTop:"1rem",background:C.paper2,border:"1px solid #d8d3ca",padding:isMobile?"1.5rem":"2rem",display:"flex",alignItems:isMobile?"flex-start":"center",justifyContent:"space-between",gap:"1.5rem",flexDirection:isMobile?"column":"row"}}>
          <div>
            <div style={{...mono,fontSize:"0.56rem",letterSpacing:"0.15em",textTransform:"uppercase",color:C.fire,marginBottom:"0.4rem"}}>Want to be featured?</div>
            <h3 style={{...syne,fontWeight:700,fontSize:isMobile?"1rem":"1.2rem",letterSpacing:"-0.02em",color:C.ink,marginBottom:"0.3rem"}}>Get featured at the top of the Brand Directory</h3>
            <p style={{...inst,fontSize:"0.8rem",color:C.muted}}>Only <strong style={{color:C.fire}}>$5 for 7 days</strong> — the most affordable brand placement anywhere.</p>
          </div>
          <button onClick={() => go("signup")} style={{...mono,fontSize:"0.64rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.85rem 1.5rem",background:"none",color:C.ink,border:"1px solid #d8d3ca",cursor:"pointer",whiteSpace:"nowrap",width:isMobile?"100%":"auto"}}>Feature My Brand — $5 →</button>
        </div>

      </div>
    </div>
  );
}
// PRODUCTS PAGE
function Products({go}) {
  const isMobile = useIsMobile();
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const allProducts = [
    {emoji:"🌿",bg:"linear-gradient(135deg,#e8f5f0,#c8ede3)",brand:"Glow Labs",cat:"Beauty",name:"Barrier Repair Serum 30ml",price:"$68",featured:true},
    {emoji:"🎒",bg:"linear-gradient(135deg,#e8ecf5,#c8d4ed)",brand:"Nomad Goods",cat:"Lifestyle",name:"The Transit Pack 22L",price:"$145",featured:false},
    {emoji:"👕",bg:"linear-gradient(135deg,#f5e8f0,#edd4e8)",brand:"LMTD Co.",cat:"Fashion",name:"Drop 07 Oversized Tee",price:"$54",featured:true},
    {emoji:"🔦",bg:"linear-gradient(135deg,#f5f0e0,#ede0b8)",brand:"Fieldwork",cat:"Outdoor",name:"Trail Light Pro 800L",price:"$89",featured:false},
    {emoji:"🕯️",bg:"linear-gradient(135deg,#f5ece8,#edd4c8)",brand:"Rune Studio",cat:"Home",name:"Amber Block Candle Set",price:"$42",featured:false},
    {emoji:"🥤",bg:"linear-gradient(135deg,#e8f0e0,#d4edcc)",brand:"Kova Brand",cat:"Food",name:"Daily Greens Powder 30srv",price:"$55",featured:false},
    {emoji:"🩱",bg:"linear-gradient(135deg,#e8eaf0,#c8cce8)",brand:"Axon Wear",cat:"Fitness",name:"Compression Set Obsidian",price:"$98",featured:false},
    {emoji:"📓",bg:"linear-gradient(135deg,#f0e8f5,#e8d4ed)",brand:"Pluma",cat:"Fashion",name:"Stitched Linen Journal A5",price:"$38",featured:false},
    {emoji:"👟",bg:"linear-gradient(135deg,#f5f0e8,#ede8d4)",brand:"LMTD Co.",cat:"Fashion",name:"Drop 07 Low Sneaker",price:"$120",featured:false},
    {emoji:"🧴",bg:"linear-gradient(135deg,#e8f5f2,#c8ede8)",brand:"Glow Labs",cat:"Beauty",name:"Vitamin C Brightening Mist",price:"$45",featured:false},
    {emoji:"🎽",bg:"linear-gradient(135deg,#eaf0e8,#d4edcc)",brand:"Axon Wear",cat:"Fitness",name:"Training Shorts Pro",price:"$65",featured:false},
    {emoji:"🏕️",bg:"linear-gradient(135deg,#f0ece0,#e8e0c8)",brand:"Fieldwork",cat:"Outdoor",name:"Compact Trail Tent 2P",price:"$299",featured:false},
  ];
  const cats = ["All","Fashion","Beauty","Lifestyle","Food","Outdoor","Home","Fitness"];
  const filtered = allProducts.filter(p => {
    const ms = p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase());
    const mf = activeFilter === "All" || p.cat === activeFilter;
    return ms && mf;
  });
  const featured = filtered.filter(p => p.featured);
  const regular = filtered.filter(p => !p.featured);
  const count = filtered.length;
  return (
    <div style={{paddingTop:58,minHeight:"100vh",background:C.paper}}>
      <div style={{background:C.paper2,borderBottom:"1px solid #d8d3ca",padding:isMobile?"2rem 1.25rem 1.25rem":"3rem 2rem 1.5rem"}}>
        <div style={{maxWidth:1300,margin:"0 auto"}}>
          <div style={{...mono,fontSize:"0.58rem",letterSpacing:"0.22em",textTransform:"uppercase",color:C.fire,marginBottom:"0.6rem"}}>Shop the Platform</div>
          <div style={{display:"flex",alignItems:isMobile?"flex-start":"flex-end",justifyContent:"space-between",marginBottom:"1.5rem",flexDirection:isMobile?"column":"row",gap:"1rem"}}>
            <h1 style={{...syne,fontWeight:800,fontSize:isMobile?"clamp(2rem,8vw,2.8rem)":"clamp(2.5rem,5vw,4rem)",letterSpacing:"-0.03em",lineHeight:0.95,color:C.ink}}>FEATURED<br/>PRODUCTS</h1>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search products or brands..." style={{...mono,fontSize:"0.65rem",padding:"0.7rem 1rem",border:"1px solid #d8d3ca",background:C.white,outline:"none",width:isMobile?"100%":"260px",letterSpacing:"0.06em"}}/>
          </div>
          <div style={{display:"flex",gap:"0.5rem",overflowX:"auto",paddingBottom:"0.25rem",WebkitOverflowScrolling:"touch"}}>
            {cats.map(c => (
              <button key={c} onClick={() => setActiveFilter(c)} style={{...mono,fontSize:"0.56rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.4rem 0.85rem",border:activeFilter===c?"1px solid #0a0a0a":"1px solid #d8d3ca",background:activeFilter===c?C.ink:"transparent",color:activeFilter===c?C.paper:C.muted,cursor:"pointer",transition:"all .2s",whiteSpace:"nowrap",flexShrink:0}}>{c}</button>
            ))}
          </div>
        </div>
      </div>
      <div style={{maxWidth:1300,margin:"0 auto",padding:isMobile?"1.5rem 1.25rem 3rem":"2rem 2rem 5rem"}}>
        {featured.length > 0 && (
          <div style={{marginBottom:"3rem"}}>
            <div style={{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"1.25rem"}}>
              <span style={{...mono,fontSize:"0.56rem",letterSpacing:"0.18em",textTransform:"uppercase",background:C.fire,color:"white",padding:"0.2rem 0.6rem"}}>✦ Featured Products</span>
              <span style={{...mono,fontSize:"0.54rem",color:C.muted,letterSpacing:"0.1em"}}>Promoted by brands</span>
            </div>
            <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(2,1fr)",gap:"1px",background:"#d8d3ca"}}>
              {featured.map(p => (
                <div key={p.name} style={{background:C.white,display:"flex",flexDirection:isMobile?"column":"row",overflow:"hidden",border:"2px solid #e8400c"}}>
                  <div style={{width:isMobile?"100%":200,height:isMobile?160:200,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"3rem",background:p.bg,flexShrink:0}}>{p.emoji}</div>
                  <div style={{padding:"1.5rem",display:"flex",flexDirection:"column",gap:"0.5rem",flex:1}}>
                    <span style={{...mono,fontSize:"0.52rem",letterSpacing:"0.12em",textTransform:"uppercase",color:C.fire}}>✦ Featured · {p.brand}</span>
                    <h3 style={{...syne,fontWeight:700,fontSize:"1.1rem",letterSpacing:"-0.01em",lineHeight:1.2,color:C.ink}}>{p.name}</h3>
                    <span style={{...mono,fontSize:"0.52rem",letterSpacing:"0.1em",textTransform:"uppercase",color:C.muted}}>{p.cat}</span>
                    <div style={{marginTop:"auto",paddingTop:"1rem",borderTop:"1px solid #d8d3ca",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                      <span style={{...syne,fontWeight:800,fontSize:"1.3rem",color:C.ink}}>{p.price}</span>
                      <button onClick={() => go("brandprofile",{brand:BRANDS[0]})} style={{...mono,fontSize:"0.62rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.6rem 1.25rem",background:C.fire,color:"white",border:"none",cursor:"pointer"}}>Shop Now →</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div style={{...mono,fontSize:"0.56rem",letterSpacing:"0.12em",color:C.muted,textTransform:"uppercase",marginBottom:"1.25rem"}}>
          {count} {count === 1 ? "product" : "products"}
          {activeFilter !== "All" ? " in " + activeFilter : ""}
          {search ? " matching " + search : ""}
        </div>
        {filtered.length > 0 ? (
          <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr 1fr":"repeat(4,1fr)",gap:isMobile?"0.75rem":"1px",background:isMobile?"transparent":"#d8d3ca"}}>
            {regular.map(p => (
              <button key={p.name} onClick={() => go("brandprofile",{brand:BRANDS[0]})}
                style={{border:isMobile?"1px solid #d8d3ca":"none",background:C.white,display:"flex",flexDirection:"column",overflow:"hidden",cursor:"pointer",textAlign:"left",transition:"all .2s"}}
                onMouseEnter={e => e.currentTarget.style.background=C.paper2}
                onMouseLeave={e => e.currentTarget.style.background=C.white}>
                <div style={{height:isMobile?110:160,display:"flex",alignItems:"center",justifyContent:"center",fontSize:isMobile?"2rem":"2.5rem",background:p.bg}}>{p.emoji}</div>
                <div style={{padding:isMobile?"0.75rem":"1.1rem",display:"flex",flexDirection:"column",gap:"0.3rem",flex:1}}>
                  <span style={{...mono,fontSize:"0.5rem",letterSpacing:"0.12em",textTransform:"uppercase",color:C.muted}}>{p.brand}</span>
                  <span style={{...syne,fontWeight:600,fontSize:isMobile?"0.78rem":"0.88rem",letterSpacing:"-0.01em",lineHeight:1.2,color:C.ink}}>{p.name}</span>
                  <div style={{borderTop:"1px solid #d8d3ca",marginTop:"auto",paddingTop:"0.5rem",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <span style={{...syne,fontWeight:700,fontSize:isMobile?"0.85rem":"0.95rem",color:C.ink}}>{p.price}</span>
                    <span style={{...mono,fontSize:"0.5rem",letterSpacing:"0.1em",textTransform:"uppercase",color:C.fire}}>Shop →</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div style={{textAlign:"center",padding:"4rem 1rem"}}>
            <div style={{fontSize:"2rem",marginBottom:"0.75rem"}}>🔍</div>
            <h3 style={{...syne,fontWeight:700,fontSize:"1.3rem",marginBottom:"0.5rem",color:C.ink}}>No products found</h3>
            <p style={{...inst,color:C.muted,marginBottom:"1.25rem",fontSize:"0.88rem"}}>Try a different search or category</p>
            <button onClick={() => { setSearch(""); setActiveFilter("All"); }} style={{...mono,fontSize:"0.62rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.75rem 1.5rem",background:C.ink,color:C.paper,border:"none",cursor:"pointer"}}>Clear Filters</button>
          </div>
        )}
        <div style={{marginTop:"3rem",background:C.paper2,border:"1px solid #d8d3ca",padding:isMobile?"1.5rem":"2.5rem",display:"flex",alignItems:isMobile?"flex-start":"center",justifyContent:"space-between",gap:"1.5rem",flexDirection:isMobile?"column":"row"}}>
          <div>
            <div style={{...mono,fontSize:"0.56rem",letterSpacing:"0.15em",textTransform:"uppercase",color:C.fire,marginBottom:"0.4rem"}}>For Brands</div>
            <h3 style={{...syne,fontWeight:700,fontSize:isMobile?"1.1rem":"1.3rem",letterSpacing:"-0.02em",color:C.ink,marginBottom:"0.4rem"}}>Feature your product at the top</h3>
            <p style={{...inst,fontSize:"0.82rem",color:C.muted}}>Get in front of 180K monthly readers for just <strong style={{color:C.fire}}>$5 for 7 days</strong>.</p>
          </div>
          <button onClick={() => go("signup")} style={{...mono,fontSize:"0.66rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.9rem 1.5rem",background:C.fire,color:"white",border:"none",cursor:"pointer",whiteSpace:"nowrap",width:isMobile?"100%":"auto"}}>Feature My Product — $5 →</button>
        </div>
      </div>
    </div>
  );
}
function About({go}) {
  const isMobile = useIsMobile();
  return (
    <div style={{paddingTop:58,minHeight:"100vh",background:C.paper}}>
      <div style={{maxWidth:860,margin:"0 auto",padding:isMobile?"2.5rem 1.25rem":"5rem 2rem"}}>
        <div style={{...mono,fontSize:"0.58rem",letterSpacing:"0.22em",textTransform:"uppercase",color:C.fire,marginBottom:"0.85rem"}}>Our Story</div>
        <h1 style={{...syne,fontWeight:800,fontSize:isMobile?"clamp(2.5rem,10vw,3.5rem)":"clamp(3rem,6vw,5rem)",letterSpacing:"-0.03em",lineHeight:0.92,marginBottom:"3rem",color:C.ink}}>
          BUILT FOR<br />BRANDS WHO<br /><span style={{color:C.fire}}>MEAN IT.</span>
        </h1>
        {[
          {t:"Most platforms were built to extract. Not to empower. They dress it up nicely but underneath it is the same game. Get you in, lock you in, charge you more. The brands using them are not partners. They are product.",s:false},
          {t:"BRANDSPACE was built because that was not good enough.",s:true},
          {t:"We saw brand owners — real people, real products, real stories — pouring their energy into platforms that never truly had their back. Paying for visibility that should be earned. Fighting algorithms designed to keep them dependent.",s:false},
          {t:"We said no to that model.",s:true},
          {t:"BRANDSPACE is built on a different foundation. Community first. Opportunity open to everyone. Yes there are paid features for brands that want to grow faster — but the platform was never just about the money.",s:false},
          {t:"This is not a cash cow. This is a community.",s:true},
          {t:"And it started with one simple belief — every brand deserves a platform that actually gives a damn.",s:false},
          {t:"Welcome to BRANDSPACE.",s:true},
        ].map((p,i) => (
          <p key={i} style={{...inst,fontSize:p.s?isMobile?"1rem":"1.1rem":"0.97rem",fontWeight:p.s?500:400,lineHeight:1.9,color:p.s?C.fire:"#1a1a1a",marginBottom:"1.5rem",fontStyle:p.s?"italic":"normal"}}>{p.t}</p>
        ))}
        <div style={{display:"flex",flexDirection:isMobile?"column":"row",gap:"0.75rem",marginTop:"2.5rem"}}>
          <button onClick={() => go("signup")} style={{...mono,fontSize:"0.68rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.9rem 2rem",background:C.fire,color:"white",border:"none",cursor:"pointer",width:isMobile?"100%":"auto"}}>Join the Platform →</button>
          <button onClick={() => go("discover")} style={{...mono,fontSize:"0.68rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.9rem 2rem",background:"none",color:C.ink,border:"1px solid #d8d3ca",cursor:"pointer",width:isMobile?"100%":"auto"}}>Read the Journal</button>
        </div>
      </div>
    </div>
  );
}

// PRICING PAGE
function Pricing({go}) {
  const isMobile = useIsMobile();
  const plans = [
    {
      name:"Starter", price:"$0", sub:"/ forever", amount:0,
      desc:"Everything you need to get your brand on the platform and start building an audience.",
      features:["Brand profile page","Up to 3 posts per month","2 product listings","Basic analytics","Community access"],
      cta:"Get Started Free", highlight:false,
    },
    {
      name:"Growth", price:"$49", sub:"/ month", amount:49,
      desc:"For brands ready to build serious reach and turn readers into repeat customers.",
      features:["Everything in Starter","Unlimited posts","Up to 20 product listings","Full analytics dashboard","Newsletter feature eligibility","Verified brand badge"],
      cta:"Start Growing", highlight:true, badge:"Most Popular",
    },
    {
      name:"Pro", price:"$149", sub:"/ month", amount:149,
      desc:"Maximum visibility. For brands that want to dominate the platform.",
      features:["Everything in Growth","Homepage featured placement","Sponsored newsletter slot","Ticker + launch spotlight","Priority editorial support","Affiliate revenue share"],
      cta:"Go Pro", highlight:false,
    },
  ];
  return (
    <div style={{paddingTop:58,minHeight:"100vh",background:C.ink}}>

      {/* HEADER */}
      <div style={{maxWidth:1100,margin:"0 auto",padding:isMobile?"3rem 1.25rem 2rem":"5rem 2rem 3rem",textAlign:"center"}}>
        <div style={{...mono,fontSize:"0.6rem",letterSpacing:"0.22em",textTransform:"uppercase",color:C.fire,marginBottom:"1rem"}}>For Brands</div>
        <h1 style={{...syne,fontWeight:800,fontSize:isMobile?"clamp(2.5rem,9vw,3.5rem)":"clamp(3rem,5vw,4.5rem)",letterSpacing:"-0.03em",lineHeight:0.95,color:C.paper,marginBottom:"1.25rem"}}>
          FREE TO START.<br/><span style={{color:C.fire}}>BUILT TO SCALE.</span>
        </h1>
        <p style={{...inst,fontSize:"0.95rem",color:"#666",lineHeight:1.75,maxWidth:500,margin:"0 auto"}}>
          Get your brand in front of 180K monthly readers. Start free, upgrade when you're ready to grow. Community first — always.
        </p>
      </div>

      {/* PLANS */}
      <div style={{maxWidth:1100,margin:"0 auto",padding:isMobile?"0 1.25rem 3rem":"0 2rem 5rem"}}>
        <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(3,1fr)",gap:isMobile?"1rem":"1px",background:isMobile?"transparent":"rgba(255,255,255,0.06)"}}>
          {plans.map(plan => (
            <div key={plan.name} style={{background:plan.highlight?"#0f0f0f":C.ink,border:plan.highlight?`1px solid ${C.fire}`:isMobile?"1px solid rgba(255,255,255,0.08)":"none",padding:isMobile?"1.75rem":"2.5rem",display:"flex",flexDirection:"column",gap:"1.25rem",position:"relative"}}>
              {plan.badge && (
                <span style={{...mono,fontSize:"0.56rem",letterSpacing:"0.15em",textTransform:"uppercase",background:C.fire,color:"white",padding:"0.25rem 0.7rem",width:"fit-content"}}>
                  {plan.badge}
                </span>
              )}
              <div style={{...syne,fontWeight:800,fontSize:"1.5rem",letterSpacing:"-0.02em",color:C.paper}}>{plan.name}</div>
              <div>
                <span style={{...syne,fontWeight:800,fontSize:isMobile?"2.5rem":"2.8rem",letterSpacing:"-0.04em",color:C.paper,lineHeight:1}}>{plan.price}</span>
                <span style={{...mono,fontSize:"0.62rem",color:"#555",letterSpacing:"0.1em",marginLeft:"0.5rem"}}>{plan.sub}</span>
              </div>
              <p style={{...inst,fontSize:"0.82rem",color:"#666",lineHeight:1.65}}>{plan.desc}</p>
              <div style={{display:"flex",flexDirection:"column",gap:"0.7rem",flex:1}}>
                {plan.features.map(f => (
                  <div key={f} style={{display:"flex",alignItems:"flex-start",gap:"0.7rem"}}>
                    <span style={{color:C.fire,fontSize:"0.65rem",marginTop:2,flexShrink:0}}>✦</span>
                    <span style={{...inst,fontSize:"0.82rem",color:"#aaa",lineHeight:1.55}}>{f}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => go("signup")}
                style={{...mono,fontSize:"0.66rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.95rem",textAlign:"center",cursor:"pointer",marginTop:"auto",border:"none",background:plan.highlight?C.fire:"rgba(255,255,255,0.08)",color:plan.highlight?"white":C.paper,transition:"all .2s"}}
                onMouseEnter={e => e.target.style.background=plan.highlight?"#c83208":"rgba(255,255,255,0.15)"}
                onMouseLeave={e => e.target.style.background=plan.highlight?C.fire:"rgba(255,255,255,0.08)"}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* BOOST PLAN */}
        <div style={{marginTop:isMobile?"1.5rem":"1px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",padding:isMobile?"1.75rem":"2rem",display:"flex",alignItems:isMobile?"flex-start":"center",justifyContent:"space-between",gap:"1.5rem",flexDirection:isMobile?"column":"row"}}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"0.5rem",flexWrap:"wrap"}}>
              <span style={{...syne,fontWeight:800,fontSize:"1.3rem",color:C.paper}}>7 Day Boost</span>
              <span style={{...syne,fontWeight:800,fontSize:"1.3rem",color:C.fire}}>$5</span>
              <span style={{...mono,fontSize:"0.56rem",letterSpacing:"0.14em",textTransform:"uppercase",background:"rgba(232,64,12,0.15)",color:C.fire,padding:"0.2rem 0.6rem"}}>One Time</span>
            </div>
            <p style={{...inst,fontSize:"0.85rem",color:"#666",lineHeight:1.65,maxWidth:500}}>
              No plan needed. Any brand can pay $5 to get featured on the homepage, discover page, and brand directory for 7 days. Sign up for free and boost instantly. The most affordable placement anywhere.
            </p>
          </div>
          <button onClick={() => go("signup")} style={{...mono,fontSize:"0.66rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.9rem 1.75rem",background:C.fire,color:"white",border:"none",cursor:"pointer",whiteSpace:"nowrap",width:isMobile?"100%":"auto"}}>Get Boosted — $5 →</button>
        </div>

        {/* COMPARISON NOTE */}
        <div style={{marginTop:"3rem",textAlign:"center"}}>
          <p style={{...inst,fontSize:"0.85rem",color:"#555",lineHeight:1.75}}>
            All plans include access to the BRANDSPACE community, brand profile page, and reader discovery.<br/>
            <span style={{color:C.fire}}>No hidden fees. Cancel anytime. Community first — always.</span>
          </p>
        </div>

        {/* FAQ */}
        <div style={{marginTop:"3rem"}}>
          <h2 style={{...syne,fontWeight:800,fontSize:isMobile?"1.5rem":"2rem",letterSpacing:"-0.02em",color:C.paper,marginBottom:"1.5rem"}}>Common Questions</h2>
          {[
            ["Can I start for free?","Yes. The Starter plan is free forever. No credit card required. You get a brand profile, up to 3 posts per month, and 2 product listings."],
            ["What is the $5 boost?","No plan needed. Any brand can pay $5 for 7 days of featured placement across the homepage, discover page, and brand directory. Sign up free and boost instantly. It is a one time payment, not a subscription."],
            ["Can I cancel anytime?","Yes. Cancel your Growth or Pro plan anytime from your dashboard. No penalties, no questions."],
            ["Do readers pay anything?","No. Readers create a free account to access full articles. Reading is always free on BRANDSPACE."],
            ["How do I get verified?","Submit your brand website and social media in your dashboard. Our team reviews and verifies within 48 hours."],
          ].map(([q,a],i) => (
            <div key={i} style={{borderBottom:"1px solid rgba(255,255,255,0.08)",padding:"1.25rem 0"}}>
              <div style={{...syne,fontWeight:700,fontSize:"0.95rem",color:C.paper,marginBottom:"0.5rem"}}>{q}</div>
              <p style={{...inst,fontSize:"0.82rem",color:"#666",lineHeight:1.65}}>{a}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

// LOGIN PAGE
function Login({go}) {
  const isMobile = useIsMobile();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const GOOGLE_CLIENT_ID = "719358526729-f36ft586ptngbbth64unpt6397u4o90s.apps.googleusercontent.com";

  function handleGoogleLogin() {
    const params = new URLSearchParams({
      client_id: GOOGLE_CLIENT_ID,
      redirect_uri: window.location.origin,
      response_type: "token",
      scope: "email profile",
      prompt: "select_account",
    });
    window.location.href = "https://accounts.google.com/o/oauth2/v2/auth?" + params.toString();
  }

  function handleLogin() {
    if (!email) { setError("Please enter your email."); return; }
    if (!pass) { setError("Please enter your password."); return; }
    if (!email.includes("@")) { setError("Please enter a valid email."); return; }
    setError("");
    setDone(true);
  }

  if (done) return (
    <div style={{paddingTop:58,minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:C.paper,padding:"2rem"}}>
      <div style={{textAlign:"center",maxWidth:400}}>
        <div style={{fontSize:"3rem",marginBottom:"1rem"}}>👋</div>
        <h2 style={{...syne,fontWeight:800,fontSize:"2rem",letterSpacing:"-0.02em",marginBottom:"0.5rem",color:C.ink}}>Welcome back!</h2>
        <p style={{...inst,color:C.muted,marginBottom:"2rem",fontSize:"0.9rem"}}>You are now logged in to BRANDSPACE.</p>
        <button onClick={() => go("home")} style={{...mono,fontSize:"0.68rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.9rem 2rem",background:C.fire,color:"white",border:"none",cursor:"pointer",width:"100%"}}>Go to Home →</button>
      </div>
    </div>
  );

  return (
    <div style={{paddingTop:58,minHeight:"100vh",background:C.paper,display:"flex"}}>
      {/* LEFT — FORM */}
      <div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:isMobile?"2rem 1.25rem":"3rem 2rem"}}>
        <div style={{width:"100%",maxWidth:400}}>
          <button onClick={() => go("home")} style={{...mono,fontSize:"0.58rem",letterSpacing:"0.15em",textTransform:"uppercase",color:C.muted,background:"none",border:"none",cursor:"pointer",marginBottom:"2rem",display:"flex",alignItems:"center",gap:"0.5rem"}}>← Back to Home</button>
          <div style={{...mono,fontSize:"0.6rem",letterSpacing:"0.22em",textTransform:"uppercase",color:C.fire,marginBottom:"0.75rem"}}>Welcome Back</div>
          <h1 style={{...syne,fontWeight:800,fontSize:isMobile?"2rem":"2.5rem",letterSpacing:"-0.03em",marginBottom:"2rem",color:C.ink}}>LOG IN</h1>
          <div style={{display:"flex",flexDirection:"column",gap:"0.75rem"}}>
            <div>
              <label style={{...mono,fontSize:"0.56rem",letterSpacing:"0.15em",textTransform:"uppercase",color:C.muted,display:"block",marginBottom:"0.4rem"}}>Email</label>
              <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="your@email.com"
                style={{...inst,width:"100%",padding:"0.9rem 1rem",border:"1px solid #d8d3ca",background:C.white,fontSize:"0.9rem",outline:"none"}}
                onFocus={e => e.target.style.borderColor=C.fire}
                onBlur={e => e.target.style.borderColor="#d8d3ca"}/>
            </div>
            <div>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.4rem"}}>
                <label style={{...mono,fontSize:"0.56rem",letterSpacing:"0.15em",textTransform:"uppercase",color:C.muted}}>Password</label>
                <button style={{...mono,fontSize:"0.54rem",color:C.fire,background:"none",border:"none",cursor:"pointer",letterSpacing:"0.08em"}}>Forgot password?</button>
              </div>
              <input value={pass} onChange={e => setPass(e.target.value)} type="password" placeholder="••••••••"
                style={{...inst,width:"100%",padding:"0.9rem 1rem",border:"1px solid #d8d3ca",background:C.white,fontSize:"0.9rem",outline:"none"}}
                onFocus={e => e.target.style.borderColor=C.fire}
                onBlur={e => e.target.style.borderColor="#d8d3ca"}/>
            </div>
            {error && <div style={{...mono,fontSize:"0.58rem",color:C.fire,letterSpacing:"0.08em"}}>{error}</div>}
            <button onClick={handleLogin} style={{...mono,fontSize:"0.7rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"1rem",background:C.ink,color:C.paper,border:"none",cursor:"pointer",marginTop:"0.25rem"}}>Log In →</button>
            <div style={{borderTop:"1px solid #d8d3ca",paddingTop:"1rem",textAlign:"center"}}>
              <span style={{...inst,fontSize:"0.85rem",color:C.muted}}>Don't have an account? </span>
              <button onClick={() => go("signup")} style={{...inst,fontSize:"0.85rem",color:C.fire,background:"none",border:"none",cursor:"pointer",fontWeight:500}}>Sign up free</button>
            </div>
            {/* Social login */}
            <div style={{textAlign:"center",...mono,fontSize:"0.54rem",letterSpacing:"0.12em",textTransform:"uppercase",color:C.muted}}>or continue with</div>
            <button style={{...inst,padding:"0.85rem",border:"1px solid #d8d3ca",background:C.white,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",fontSize:"0.85rem",color:C.ink,fontWeight:500,transition:"border-color .2s",width:"100%"}}
              onClick={handleGoogleLogin}
              onMouseEnter={e => e.currentTarget.style.borderColor=C.ink}
              onMouseLeave={e => e.currentTarget.style.borderColor="#d8d3ca"}>
              <span style={{fontWeight:700}}>G</span> Continue with Google
            </button>
          </div>
        </div>
      </div>
      {/* RIGHT — BRAND PANEL (desktop only) */}
      {!isMobile && (
        <div style={{width:420,background:C.ink,display:"flex",flexDirection:"column",justifyContent:"center",padding:"3rem",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",bottom:-60,right:-60,width:250,height:250,background:"radial-gradient(circle,rgba(232,64,12,0.25),transparent 70%)",pointerEvents:"none"}}/>
          <div style={{position:"relative",zIndex:1}}>
            <div style={{...syne,fontWeight:800,fontSize:"0.9rem",letterSpacing:"-0.01em",display:"flex",alignItems:"center",gap:"0.4rem",color:C.paper,marginBottom:"3rem"}}>
              <span style={{width:7,height:7,background:C.fire,borderRadius:"50%",display:"inline-block"}}/>BRANDSPACE
            </div>
            <h2 style={{...syne,fontWeight:800,fontSize:"2rem",letterSpacing:"-0.02em",lineHeight:1.1,color:C.paper,marginBottom:"1.25rem"}}>Every brand has a story.<br/><span style={{color:C.fire}}>This is where they tell it.</span></h2>
            <p style={{...inst,fontSize:"0.85rem",color:"#666",lineHeight:1.75,marginBottom:"2rem"}}>Join 2,400+ brands publishing their story and growing their audience on BRANDSPACE.</p>
            <div style={{display:"flex",flexDirection:"column",gap:"0.75rem"}}>
              {[["2.4K+","Brands on the platform"],["180K","Monthly readers"],["$5","Featured placement"]].map(([v,l]) => (
                <div key={l} style={{display:"flex",alignItems:"center",gap:"1rem",padding:"0.75rem",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.06)"}}>
                  <span style={{...syne,fontWeight:700,fontSize:"1.1rem",color:C.fire,minWidth:50}}>{v}</span>
                  <span style={{...inst,fontSize:"0.82rem",color:"#888"}}>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// SIGNUP PAGE
function Signup({go, initialPlan}) {
  const isMobile = useIsMobile();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({name:"",email:"",brand:"",cat:"",password:""});
  const [error, setError] = useState("");

  const cats = ["Fashion","Apparel","Beauty","Skincare","Food","Wellness","Tech","Home","Outdoor","Fitness","Other"];

  const GOOGLE_CLIENT_ID = "719358526729-f36ft586ptngbbth64unpt6397u4o90s.apps.googleusercontent.com";

  function handleGoogleLogin() {
    const params = new URLSearchParams({
      client_id: GOOGLE_CLIENT_ID,
      redirect_uri: window.location.origin,
      response_type: "token",
      scope: "email profile",
      prompt: "select_account",
    });
    window.location.href = "https://accounts.google.com/o/oauth2/v2/auth?" + params.toString();
  }

  function nextStep() {
    setError("");
    if (step === 1) {
      if (!form.name) { setError("Please enter your name."); return; }
      if (!form.email || !form.email.includes("@")) { setError("Please enter a valid email."); return; }
      if (!form.password || form.password.length < 6) { setError("Password must be at least 6 characters."); return; }
      setStep(2);
    } else if (step === 2) {
      if (!form.brand) { setError("Please enter your brand name."); return; }
      if (!form.cat) { setError("Please select a category."); return; }
      setStep(3);
    }
  }

  if (step === 3) return (
    <div style={{paddingTop:58,minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:C.paper,padding:"2rem"}}>
      <div style={{textAlign:"center",maxWidth:460,padding:"0 1rem"}}>
        <div style={{fontSize:"3.5rem",marginBottom:"1rem"}}>🎉</div>
        <div style={{...mono,fontSize:"0.6rem",letterSpacing:"0.2em",textTransform:"uppercase",color:C.jade,marginBottom:"0.75rem"}}>You're In!</div>
        <h2 style={{...syne,fontWeight:800,fontSize:isMobile?"1.8rem":"2.2rem",letterSpacing:"-0.02em",marginBottom:"0.75rem",color:C.ink}}>Welcome to BRANDSPACE!</h2>
        <p style={{...inst,color:C.muted,fontSize:"0.92rem",lineHeight:1.75,marginBottom:"1.5rem"}}>
          Welcome, <strong>{form.brand}</strong>. Your free brand profile is live and ready. Start publishing your story and getting discovered by 180K monthly readers.
        </p>
        <div style={{background:C.paper2,border:"1px solid #d8d3ca",padding:"1rem",marginBottom:"1.5rem"}}>
          <div style={{...mono,fontSize:"0.56rem",letterSpacing:"0.12em",textTransform:"uppercase",color:C.muted,marginBottom:"0.5rem"}}>You're on the Starter plan — free forever</div>
          <div style={{...inst,fontSize:"0.82rem",color:"#555",lineHeight:1.6}}>Upgrade anytime from your dashboard to unlock unlimited posts, featured placement, and more.</div>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:"0.75rem"}}>
          <button onClick={() => go("dashboard")} style={{...mono,fontSize:"0.68rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.9rem",background:C.fire,color:"white",border:"none",cursor:"pointer",width:"100%"}}>Go to My Dashboard →</button>
          <button onClick={() => go("pricing")} style={{...mono,fontSize:"0.68rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.9rem",background:"none",color:C.ink,border:"1px solid #d8d3ca",cursor:"pointer",width:"100%"}}>View Plans & Upgrade</button>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{paddingTop:58,minHeight:"100vh",background:C.paper,display:"flex"}}>
      <div style={{flex:1,display:"flex",alignItems:"flex-start",justifyContent:"center",padding:isMobile?"2rem 1.25rem":"3rem 2rem",overflowY:"auto"}}>
        <div style={{width:"100%",maxWidth:480}}>
          <button onClick={() => go("home")} style={{...mono,fontSize:"0.58rem",letterSpacing:"0.15em",textTransform:"uppercase",color:C.muted,background:"none",border:"none",cursor:"pointer",marginBottom:"2rem",display:"flex",alignItems:"center",gap:"0.5rem"}}>← Back to Home</button>

          {/* Step indicators */}
          <div style={{display:"flex",alignItems:"center",gap:"0",marginBottom:"2rem"}}>
            {["Account","Your Brand"].map((label,i) => {
              const n=i+1; const active=step===n; const done=step>n;
              return (
                <div key={label} style={{display:"flex",alignItems:"center",flex:i<1?1:"auto"}}>
                  <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.3rem"}}>
                    <div style={{width:26,height:26,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",background:done?C.jade:active?C.fire:"#d8d3ca",color:done||active?"white":C.muted,...mono,fontSize:"0.58rem",transition:"all .3s"}}>
                      {done?"✓":n}
                    </div>
                    <span style={{...mono,fontSize:"0.48rem",letterSpacing:"0.1em",textTransform:"uppercase",color:active?C.ink:C.muted,whiteSpace:"nowrap"}}>{label}</span>
                  </div>
                  {i<1&&<div style={{flex:1,height:1,background:done?C.jade:"#d8d3ca",margin:"0 0.5rem",marginBottom:"1.2rem",transition:"background .3s"}}/>}
                </div>
              );
            })}
          </div>

          {/* STEP 1 — ACCOUNT */}
          {step === 1 && (
            <div style={{display:"flex",flexDirection:"column",gap:"0.75rem"}}>
              <div style={{...mono,fontSize:"0.6rem",letterSpacing:"0.22em",textTransform:"uppercase",color:C.fire,marginBottom:"0.25rem"}}>Step 1 of 2</div>
              <h1 style={{...syne,fontWeight:800,fontSize:isMobile?"1.8rem":"2.2rem",letterSpacing:"-0.03em",marginBottom:"0.25rem",color:C.ink}}>CREATE ACCOUNT</h1>
              <p style={{...inst,fontSize:"0.85rem",color:C.muted,marginBottom:"0.75rem"}}>Free to join. No credit card required.</p>
              {[["Full Name","text","Your name","name"],["Email","email","your@email.com","email"],["Password","password","At least 6 characters","password"]].map(([label,type,ph,key]) => (
                <div key={key}>
                  <label style={{...mono,fontSize:"0.54rem",letterSpacing:"0.15em",textTransform:"uppercase",color:C.muted,display:"block",marginBottom:"0.35rem"}}>{label}</label>
                  <input value={form[key]} onChange={e => upd(key,e.target.value)} type={type} placeholder={ph}
                    style={{...inst,width:"100%",padding:"0.9rem 1rem",border:"1px solid #d8d3ca",background:C.white,fontSize:"0.9rem",outline:"none"}}
                    onFocus={e => e.target.style.borderColor=C.fire}
                    onBlur={e => e.target.style.borderColor="#d8d3ca"}/>
                </div>
              ))}
              {error && <div style={{...mono,fontSize:"0.58rem",color:C.fire,letterSpacing:"0.08em"}}>{error}</div>}
              <button onClick={nextStep} style={{...mono,fontSize:"0.7rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"1rem",background:C.ink,color:C.paper,border:"none",cursor:"pointer",marginTop:"0.25rem"}}>Continue →</button>
              <div style={{textAlign:"center"}}>
                <span style={{...inst,fontSize:"0.85rem",color:C.muted}}>Already have an account? </span>
                <button onClick={() => go("login")} style={{...inst,fontSize:"0.85rem",color:C.fire,background:"none",border:"none",cursor:"pointer",fontWeight:500}}>Log in</button>
              </div>
              <div style={{textAlign:"center",...mono,fontSize:"0.54rem",letterSpacing:"0.12em",textTransform:"uppercase",color:C.muted}}>or continue with</div>
              <button style={{...inst,padding:"0.85rem",border:"1px solid #d8d3ca",background:C.white,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",fontSize:"0.85rem",color:C.ink,fontWeight:500,transition:"border-color .2s",width:"100%"}}
                onClick={handleGoogleLogin}
                onMouseEnter={e => e.currentTarget.style.borderColor=C.ink}
                onMouseLeave={e => e.currentTarget.style.borderColor="#d8d3ca"}>
                <span style={{fontWeight:700}}>G</span> Continue with Google
              </button>
            </div>
          )}

          {/* STEP 2 — BRAND */}
          {step === 2 && (
            <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
              <div style={{...mono,fontSize:"0.6rem",letterSpacing:"0.22em",textTransform:"uppercase",color:C.fire,marginBottom:"0.25rem"}}>Step 2 of 2</div>
              <h1 style={{...syne,fontWeight:800,fontSize:isMobile?"1.8rem":"2.2rem",letterSpacing:"-0.03em",marginBottom:"0.25rem",color:C.ink}}>YOUR BRAND</h1>
              <p style={{...inst,fontSize:"0.85rem",color:C.muted,marginBottom:"0.75rem"}}>Tell us about your brand. You can always update this later.</p>
              <div>
                <label style={{...mono,fontSize:"0.54rem",letterSpacing:"0.15em",textTransform:"uppercase",color:C.muted,display:"block",marginBottom:"0.35rem"}}>Brand Name</label>
                <input value={form.brand} onChange={e => upd("brand",e.target.value)} placeholder="Your brand name"
                  style={{...inst,width:"100%",padding:"0.9rem 1rem",border:"1px solid #d8d3ca",background:C.white,fontSize:"0.9rem",outline:"none"}}
                  onFocus={e => e.target.style.borderColor=C.fire}
                  onBlur={e => e.target.style.borderColor="#d8d3ca"}/>
              </div>
              <div>
                <label style={{...mono,fontSize:"0.54rem",letterSpacing:"0.15em",textTransform:"uppercase",color:C.muted,display:"block",marginBottom:"0.5rem"}}>Category</label>
                <div style={{display:"flex",flexWrap:"wrap",gap:"0.5rem"}}>
                  {cats.map(c => (
                    <button key={c} onClick={() => upd("cat",c)} style={{...mono,fontSize:"0.54rem",letterSpacing:"0.1em",padding:"0.4rem 0.8rem",border:form.cat===c?"1px solid #0a0a0a":"1px solid #d8d3ca",background:form.cat===c?C.ink:"transparent",color:form.cat===c?C.paper:C.muted,cursor:"pointer",transition:"all .2s"}}>{c}</button>
                  ))}
                </div>
              </div>
              {error && <div style={{...mono,fontSize:"0.58rem",color:C.fire,letterSpacing:"0.08em"}}>{error}</div>}
              <div style={{background:C.paper2,border:"1px solid #d8d3ca",padding:"1rem",display:"flex",alignItems:"center",gap:"0.75rem"}}>
                <span style={{fontSize:"1.1rem"}}>🎁</span>
                <div>
                  <div style={{...syne,fontWeight:600,fontSize:"0.88rem",color:C.ink,marginBottom:"0.2rem"}}>Starting on the free plan</div>
                  <div style={{...inst,fontSize:"0.78rem",color:C.muted}}>Upgrade anytime from your dashboard. No credit card needed today.</div>
                </div>
              </div>
              <div style={{display:"flex",gap:"0.75rem",marginTop:"0.5rem"}}>
                <button onClick={() => setStep(1)} style={{...mono,fontSize:"0.66rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.9rem 1.25rem",background:"none",color:C.ink,border:"1px solid #d8d3ca",cursor:"pointer"}}>← Back</button>
                <button onClick={nextStep} style={{...mono,fontSize:"0.66rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.9rem",flex:1,background:C.fire,color:"white",border:"none",cursor:"pointer"}}>Launch My Brand →</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT PANEL — desktop only */}
      {!isMobile && (
        <div style={{width:380,background:C.ink,display:"flex",flexDirection:"column",justifyContent:"center",padding:"3rem",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:-60,right:-60,width:220,height:220,background:"radial-gradient(circle,rgba(232,64,12,0.2),transparent 70%)",pointerEvents:"none"}}/>
          <div style={{position:"relative",zIndex:1}}>
            <div style={{...syne,fontWeight:800,fontSize:"0.9rem",display:"flex",alignItems:"center",gap:"0.4rem",color:C.paper,marginBottom:"2.5rem"}}>
              <span style={{width:7,height:7,background:C.fire,borderRadius:"50%",display:"inline-block"}}/>BRANDSPACE
            </div>
            <h2 style={{...syne,fontWeight:800,fontSize:"1.8rem",letterSpacing:"-0.02em",lineHeight:1.1,color:C.paper,marginBottom:"1rem"}}>Join the brands<br/>already growing<br/><span style={{color:C.fire}}>on BRANDSPACE.</span></h2>
            <p style={{...inst,fontSize:"0.82rem",color:"#666",lineHeight:1.75,marginBottom:"2rem"}}>Community first. Open opportunity. Every brand deserves a platform that actually gives a damn.</p>
            <div style={{display:"flex",flexDirection:"column",gap:"0.6rem"}}>
              {["Free to start — no credit card","180K monthly readers","Featured placement from $5","Community first — always"].map(f => (
                <div key={f} style={{display:"flex",alignItems:"center",gap:"0.75rem"}}>
                  <span style={{color:C.fire,fontSize:"0.7rem",flexShrink:0}}>✦</span>
                  <span style={{...inst,fontSize:"0.82rem",color:"#888"}}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


// BRAND DASHBOARD
function Dashboard({go}) {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("overview");
  const tabs = ["overview","posts","products","analytics","settings"];

  const stats = [
    {label:"Total Views",value:"12,847",change:"+18%",up:true},
    {label:"Article Reads",value:"4,293",change:"+24%",up:true},
    {label:"Followers",value:"847",change:"+12%",up:true},
    {label:"Products Clicked",value:"1,204",change:"+9%",up:true},
  ];

  const posts = [
    {title:"How We Built a $50K Month With Zero Ad Spend",status:"Published",views:3204,date:"May 22"},
    {title:"The Supply Chain Mistake That Almost Killed Our Brand",status:"Published",views:1847,date:"May 18"},
    {title:"Behind the Drop: Our Creative Process",status:"Draft",views:0,date:"May 25"},
    {title:"Why We Turned Down a $200K Investment",status:"Scheduled",views:0,date:"Jun 1"},
  ];

  const products = [
    {name:"Barrier Repair Serum 30ml",price:"$68",clicks:542,status:"Active"},
    {name:"Vitamin C Brightening Mist",price:"$45",clicks:321,status:"Active"},
    {name:"Daily Defense SPF 50",price:"$38",clicks:0,status:"Draft"},
  ];

  return (
    <div style={{paddingTop:58,minHeight:"100vh",background:C.paper}}>

      {/* HEADER */}
      <div style={{background:C.ink,padding:isMobile?"1.5rem 1.25rem":"2rem"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1.5rem",flexWrap:"wrap",gap:"1rem"}}>
            <div style={{display:"flex",alignItems:"center",gap:"1rem"}}>
              <div style={{width:44,height:44,borderRadius:8,background:C.jade,display:"flex",alignItems:"center",justifyContent:"center",...syne,fontWeight:800,fontSize:"0.9rem",color:"white"}}>GL</div>
              <div>
                <div style={{...syne,fontWeight:700,fontSize:"1.1rem",color:C.paper}}>Glow Labs</div>
                <div style={{display:"flex",alignItems:"center",gap:"0.5rem"}}>
                  <span style={{...mono,fontSize:"0.52rem",letterSpacing:"0.1em",textTransform:"uppercase",color:C.jade,background:"rgba(26,122,94,0.2)",padding:"0.15rem 0.45rem"}}>✓ Verified</span>
                  <span style={{...mono,fontSize:"0.52rem",letterSpacing:"0.1em",textTransform:"uppercase",color:"#555"}}>Starter Plan</span>
                </div>
              </div>
            </div>
            <div style={{display:"flex",gap:"0.75rem"}}>
              <button onClick={()=>go("pricing")} style={{...mono,fontSize:"0.58rem",letterSpacing:"0.1em",textTransform:"uppercase",padding:"0.6rem 1.25rem",background:"rgba(232,64,12,0.15)",color:C.fire,border:"1px solid rgba(232,64,12,0.3)",cursor:"pointer"}}>Upgrade Plan →</button>
              <button onClick={()=>go("home")} style={{...mono,fontSize:"0.58rem",letterSpacing:"0.1em",textTransform:"uppercase",padding:"0.6rem 1.25rem",background:"rgba(255,255,255,0.08)",color:C.paper,border:"none",cursor:"pointer"}}>View Profile →</button>
            </div>
          </div>
          {/* Tabs */}
          <div style={{display:"flex",gap:"0",overflowX:"auto",WebkitOverflowScrolling:"touch"}}>
            {tabs.map(t=>(
              <button key={t} onClick={()=>setActiveTab(t)} style={{...mono,fontSize:"0.58rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.75rem 1.25rem",background:"none",border:"none",borderBottom:activeTab===t?"2px solid #e8400c":"2px solid transparent",color:activeTab===t?C.paper:"#555",cursor:"pointer",whiteSpace:"nowrap",transition:"all .2s"}}>
                {t.charAt(0).toUpperCase()+t.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{maxWidth:1200,margin:"0 auto",padding:isMobile?"1.5rem 1.25rem":"2rem"}}>

        {/* OVERVIEW */}
        {activeTab==="overview" && (
          <div style={{display:"flex",flexDirection:"column",gap:"2rem"}}>
            {/* Upgrade banner */}
            <div style={{background:"rgba(232,64,12,0.06)",border:"1px solid rgba(232,64,12,0.2)",padding:"1.25rem",display:"flex",alignItems:isMobile?"flex-start":"center",justifyContent:"space-between",gap:"1rem",flexDirection:isMobile?"column":"row"}}>
              <div>
                <div style={{...syne,fontWeight:700,fontSize:"0.95rem",color:C.ink,marginBottom:"0.25rem"}}>You're on the free Starter plan</div>
                <div style={{...inst,fontSize:"0.82rem",color:C.muted}}>Upgrade to Growth for unlimited posts, 20 products, verified badge and more.</div>
              </div>
              <button onClick={()=>go("pricing")} style={{...mono,fontSize:"0.62rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.75rem 1.5rem",background:C.fire,color:"white",border:"none",cursor:"pointer",whiteSpace:"nowrap",width:isMobile?"100%":"auto"}}>Upgrade — $49/mo →</button>
            </div>

            {/* Stats */}
            <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr 1fr":"repeat(4,1fr)",gap:isMobile?"0.75rem":"1px",background:isMobile?"transparent":"#d8d3ca"}}>
              {stats.map(s=>(
                <div key={s.label} style={{background:C.white,padding:"1.5rem",border:isMobile?"1px solid #d8d3ca":"none"}}>
                  <div style={{...mono,fontSize:"0.54rem",letterSpacing:"0.12em",textTransform:"uppercase",color:C.muted,marginBottom:"0.5rem"}}>{s.label}</div>
                  <div style={{...syne,fontWeight:800,fontSize:"1.8rem",letterSpacing:"-0.03em",color:C.ink,marginBottom:"0.25rem"}}>{s.value}</div>
                  <div style={{...mono,fontSize:"0.52rem",color:s.up?C.jade:"#e8400c",letterSpacing:"0.08em"}}>{s.change} this month</div>
                </div>
              ))}
            </div>

            {/* Quick actions */}
            <div>
              <div style={{...mono,fontSize:"0.58rem",letterSpacing:"0.18em",textTransform:"uppercase",color:C.muted,marginBottom:"1rem"}}>Quick Actions</div>
              <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr":"repeat(3,1fr)",gap:"0.75rem"}}>
                {[
                  {icon:"✍️",title:"Write New Post",desc:"Share your brand story or strategy",action:()=>setActiveTab("posts")},
                  {icon:"📦",title:"Add Product",desc:"List a new product on the platform",action:()=>setActiveTab("products")},
                  {icon:"⚡",title:"Boost for $5",desc:"Get featured for 7 days instantly",action:()=>go("pricing")},
                ].map(a=>(
                  <button key={a.title} onClick={a.action} style={{background:C.white,border:"1px solid #d8d3ca",padding:"1.5rem",textAlign:"left",cursor:"pointer",display:"flex",flexDirection:"column",gap:"0.5rem",transition:"all .2s"}}
                    onMouseEnter={e=>{e.currentTarget.style.borderColor=C.ink;e.currentTarget.style.transform="translateY(-2px)";}}
                    onMouseLeave={e=>{e.currentTarget.style.borderColor="#d8d3ca";e.currentTarget.style.transform="none";}}>
                    <span style={{fontSize:"1.5rem"}}>{a.icon}</span>
                    <div style={{...syne,fontWeight:700,fontSize:"0.95rem",color:C.ink}}>{a.title}</div>
                    <div style={{...inst,fontSize:"0.78rem",color:C.muted}}>{a.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent posts */}
            <div>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"}}>
                <div style={{...mono,fontSize:"0.58rem",letterSpacing:"0.18em",textTransform:"uppercase",color:C.muted}}>Recent Posts</div>
                <button onClick={()=>setActiveTab("posts")} style={{...mono,fontSize:"0.54rem",letterSpacing:"0.1em",textTransform:"uppercase",color:C.fire,background:"none",border:"none",cursor:"pointer"}}>View all →</button>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:"1px",background:"#d8d3ca"}}>
                {posts.slice(0,3).map(p=>(
                  <div key={p.title} style={{background:C.white,padding:"1rem 1.25rem",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"1rem"}}>
                    <div style={{flex:1}}>
                      <div style={{...syne,fontWeight:600,fontSize:"0.88rem",color:C.ink,marginBottom:"0.25rem"}}>{p.title}</div>
                      <div style={{...mono,fontSize:"0.5rem",letterSpacing:"0.1em",color:C.muted}}>{p.date}</div>
                    </div>
                    <div style={{display:"flex",alignItems:"center",gap:"1rem",flexShrink:0}}>
                      {p.views>0&&<span style={{...mono,fontSize:"0.52rem",color:C.muted,letterSpacing:"0.08em"}}>{p.views.toLocaleString()} views</span>}
                      <span style={{...mono,fontSize:"0.5rem",letterSpacing:"0.1em",textTransform:"uppercase",padding:"0.2rem 0.6rem",background:p.status==="Published"?"rgba(26,122,94,0.1)":p.status==="Draft"?"rgba(136,136,136,0.1)":"rgba(232,64,12,0.1)",color:p.status==="Published"?C.jade:p.status==="Draft"?C.muted:C.fire}}>{p.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* POSTS */}
        {activeTab==="posts" && (
          <div style={{display:"flex",flexDirection:"column",gap:"1.5rem"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem"}}>
              <h2 style={{...syne,fontWeight:700,fontSize:"1.5rem",letterSpacing:"-0.02em",color:C.ink}}>My Posts</h2>
              <button style={{...mono,fontSize:"0.62rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.75rem 1.5rem",background:C.fire,color:"white",border:"none",cursor:"pointer"}}>+ New Post</button>
            </div>
            <div style={{...inst,fontSize:"0.82rem",color:C.muted,background:C.paper2,border:"1px solid #d8d3ca",padding:"0.75rem 1rem"}}>
              You are on the Starter plan — <strong>3 posts per month</strong>. <button onClick={()=>go("pricing")} style={{color:C.fire,background:"none",border:"none",cursor:"pointer",...inst,fontSize:"0.82rem",fontWeight:500}}>Upgrade for unlimited posts →</button>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"1px",background:"#d8d3ca"}}>
              {posts.map(p=>(
                <div key={p.title} style={{background:C.white,padding:"1.25rem",display:"flex",alignItems:isMobile?"flex-start":"center",justifyContent:"space-between",gap:"1rem",flexDirection:isMobile?"column":"row"}}>
                  <div style={{flex:1}}>
                    <div style={{...syne,fontWeight:600,fontSize:"0.95rem",color:C.ink,marginBottom:"0.3rem"}}>{p.title}</div>
                    <div style={{display:"flex",alignItems:"center",gap:"0.75rem",flexWrap:"wrap"}}>
                      <span style={{...mono,fontSize:"0.5rem",letterSpacing:"0.1em",textTransform:"uppercase",padding:"0.2rem 0.6rem",background:p.status==="Published"?"rgba(26,122,94,0.1)":p.status==="Draft"?"rgba(136,136,136,0.1)":"rgba(232,64,12,0.1)",color:p.status==="Published"?C.jade:p.status==="Draft"?C.muted:C.fire}}>{p.status}</span>
                      <span style={{...mono,fontSize:"0.5rem",color:C.muted,letterSpacing:"0.08em"}}>{p.date}</span>
                      {p.views>0&&<span style={{...mono,fontSize:"0.5rem",color:C.muted,letterSpacing:"0.08em"}}>{p.views.toLocaleString()} views</span>}
                    </div>
                  </div>
                  <div style={{display:"flex",gap:"0.5rem",flexShrink:0}}>
                    <button style={{...mono,fontSize:"0.54rem",letterSpacing:"0.1em",textTransform:"uppercase",padding:"0.5rem 1rem",background:"none",color:C.ink,border:"1px solid #d8d3ca",cursor:"pointer"}}>Edit</button>
                    {p.status==="Draft"&&<button style={{...mono,fontSize:"0.54rem",letterSpacing:"0.1em",textTransform:"uppercase",padding:"0.5rem 1rem",background:C.ink,color:C.paper,border:"none",cursor:"pointer"}}>Publish</button>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PRODUCTS */}
        {activeTab==="products" && (
          <div style={{display:"flex",flexDirection:"column",gap:"1.5rem"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem"}}>
              <h2 style={{...syne,fontWeight:700,fontSize:"1.5rem",letterSpacing:"-0.02em",color:C.ink}}>My Products</h2>
              <button style={{...mono,fontSize:"0.62rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.75rem 1.5rem",background:C.fire,color:"white",border:"none",cursor:"pointer"}}>+ Add Product</button>
            </div>
            <div style={{...inst,fontSize:"0.82rem",color:C.muted,background:C.paper2,border:"1px solid #d8d3ca",padding:"0.75rem 1rem"}}>
              You are on the Starter plan — <strong>2 products max</strong>. <button onClick={()=>go("pricing")} style={{color:C.fire,background:"none",border:"none",cursor:"pointer",...inst,fontSize:"0.82rem",fontWeight:500}}>Upgrade for up to 20 products →</button>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"1px",background:"#d8d3ca"}}>
              {products.map(p=>(
                <div key={p.name} style={{background:C.white,padding:"1.25rem",display:"flex",alignItems:isMobile?"flex-start":"center",justifyContent:"space-between",gap:"1rem",flexDirection:isMobile?"column":"row"}}>
                  <div style={{flex:1}}>
                    <div style={{...syne,fontWeight:600,fontSize:"0.95rem",color:C.ink,marginBottom:"0.3rem"}}>{p.name}</div>
                    <div style={{display:"flex",alignItems:"center",gap:"0.75rem",flexWrap:"wrap"}}>
                      <span style={{...syne,fontWeight:700,fontSize:"0.88rem",color:C.fire}}>{p.price}</span>
                      <span style={{...mono,fontSize:"0.5rem",letterSpacing:"0.1em",textTransform:"uppercase",padding:"0.2rem 0.6rem",background:p.status==="Active"?"rgba(26,122,94,0.1)":"rgba(136,136,136,0.1)",color:p.status==="Active"?C.jade:C.muted}}>{p.status}</span>
                      {p.clicks>0&&<span style={{...mono,fontSize:"0.5rem",color:C.muted,letterSpacing:"0.08em"}}>{p.clicks} clicks</span>}
                    </div>
                  </div>
                  <div style={{display:"flex",gap:"0.5rem",flexShrink:0}}>
                    <button style={{...mono,fontSize:"0.54rem",letterSpacing:"0.1em",textTransform:"uppercase",padding:"0.5rem 1rem",background:"none",color:C.ink,border:"1px solid #d8d3ca",cursor:"pointer"}}>Edit</button>
                    <button style={{...mono,fontSize:"0.54rem",letterSpacing:"0.1em",textTransform:"uppercase",padding:"0.5rem 1rem",background:"none",color:"#e55",border:"1px solid #fcc",cursor:"pointer"}}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ANALYTICS */}
        {activeTab==="analytics" && (
          <div style={{display:"flex",flexDirection:"column",gap:"2rem"}}>
            <h2 style={{...syne,fontWeight:700,fontSize:"1.5rem",letterSpacing:"-0.02em",color:C.ink}}>Analytics</h2>
            <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr 1fr":"repeat(4,1fr)",gap:isMobile?"0.75rem":"1px",background:isMobile?"transparent":"#d8d3ca"}}>
              {stats.map(s=>(
                <div key={s.label} style={{background:C.white,padding:"1.5rem",border:isMobile?"1px solid #d8d3ca":"none"}}>
                  <div style={{...mono,fontSize:"0.54rem",letterSpacing:"0.12em",textTransform:"uppercase",color:C.muted,marginBottom:"0.5rem"}}>{s.label}</div>
                  <div style={{...syne,fontWeight:800,fontSize:"1.8rem",letterSpacing:"-0.03em",color:C.ink,marginBottom:"0.25rem"}}>{s.value}</div>
                  <div style={{...mono,fontSize:"0.52rem",color:s.up?C.jade:C.fire,letterSpacing:"0.08em"}}>{s.change} this month</div>
                </div>
              ))}
            </div>
            <div style={{background:C.white,border:"1px solid #d8d3ca",padding:"2rem",textAlign:"center"}}>
              <div style={{fontSize:"2rem",marginBottom:"0.75rem"}}>📊</div>
              <h3 style={{...syne,fontWeight:700,fontSize:"1.1rem",marginBottom:"0.5rem",color:C.ink}}>Full analytics on Growth plan</h3>
              <p style={{...inst,fontSize:"0.85rem",color:C.muted,marginBottom:"1.25rem"}}>Upgrade to see detailed charts, audience demographics, top performing posts, and more.</p>
              <button onClick={()=>go("pricing")} style={{...mono,fontSize:"0.64rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.85rem 1.75rem",background:C.fire,color:"white",border:"none",cursor:"pointer"}}>Upgrade to Growth →</button>
            </div>
          </div>
        )}

        {/* SETTINGS */}
        {activeTab==="settings" && (
          <div style={{display:"flex",flexDirection:"column",gap:"2rem",maxWidth:600}}>
            <h2 style={{...syne,fontWeight:700,fontSize:"1.5rem",letterSpacing:"-0.02em",color:C.ink}}>Brand Settings</h2>
            {[["Brand Name","Glow Labs"],["Category","Beauty · Skincare"],["Website","glowlabs.com"],["Instagram","@glowlabs"],["Bio","Science-backed skincare built for real skin."]].map(([label,val])=>(
              <div key={label}>
                <label style={{...mono,fontSize:"0.54rem",letterSpacing:"0.15em",textTransform:"uppercase",color:C.muted,display:"block",marginBottom:"0.4rem"}}>{label}</label>
                <input defaultValue={val} style={{...inst,width:"100%",padding:"0.9rem 1rem",border:"1px solid #d8d3ca",background:C.white,fontSize:"0.9rem",outline:"none",color:C.ink}}/>
              </div>
            ))}
            <button style={{...mono,fontSize:"0.68rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.9rem 2rem",background:C.ink,color:C.paper,border:"none",cursor:"pointer",width:isMobile?"100%":"auto",alignSelf:"flex-start"}}>Save Changes →</button>
            <div style={{borderTop:"1px solid #d8d3ca",paddingTop:"1.5rem"}}>
              <div style={{...mono,fontSize:"0.56rem",letterSpacing:"0.15em",textTransform:"uppercase",color:"#e55",marginBottom:"0.75rem"}}>Danger Zone</div>
              <button style={{...mono,fontSize:"0.62rem",letterSpacing:"0.1em",textTransform:"uppercase",padding:"0.75rem 1.5rem",background:"none",color:"#e55",border:"1px solid #fcc",cursor:"pointer"}}>Delete Brand Account</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
// ADMIN PANEL
function Admin({go}) {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("overview");
  const [whitelist, setWhitelist] = useState(["friend@email.com"]);
  const [newEmail, setNewEmail] = useState("");
  const [added, setAdded] = useState(false);
  const tabs = ["overview","brands","content","placements","revenue","whitelist"];

  const brands = [
    {name:"Glow Labs",email:"glow@glowlabs.com",plan:"Growth",posts:14,joined:"May 1",verified:true,status:"Active"},
    {name:"LMTD Co.",email:"hello@lmtd.co",plan:"Pro",posts:21,joined:"Apr 28",verified:true,status:"Active"},
    {name:"Nomad Goods",email:"team@nomadgoods.com",plan:"Starter",posts:9,joined:"May 10",verified:true,status:"Active"},
    {name:"Fieldwork",email:"hi@fieldwork.co",plan:"Starter",posts:7,joined:"May 15",verified:false,status:"Active"},
    {name:"Rune Studio",email:"studio@rune.co",plan:"Growth",posts:11,joined:"May 18",verified:true,status:"Active"},
    {name:"Kova Brand",email:"kova@kovabrand.com",plan:"Starter",posts:5,joined:"May 20",verified:false,status:"Suspended"},
  ];

  const posts = [
    {title:"The Retention Engine Behind 8-Figure Brands",brand:"Nomad Goods",status:"Published",views:3204,date:"May 22"},
    {title:"Surviving a Crowded Market Without Dropping Price",brand:"Glow Labs",status:"Published",views:1847,date:"May 20"},
    {title:"Your Brand Voice Is Your Only Moat",brand:"Rune Studio",status:"Published",views:2103,date:"May 18"},
    {title:"Supply Chain Lessons From Our Worst Quarter",brand:"Fieldwork",status:"Flagged",views:542,date:"May 15"},
    {title:"Organic Reach Isn't Dead",brand:"LMTD Co.",status:"Published",views:1204,date:"May 12"},
  ];

  const placements = [
    {brand:"Glow Labs",type:"Discover Page",amount:"$5",start:"May 20",end:"May 27",status:"Active"},
    {brand:"LMTD Co.",type:"Homepage",amount:"$5",start:"May 22",end:"May 29",status:"Active"},
    {brand:"Nomad Goods",type:"Brand Directory",amount:"$5",start:"May 15",end:"May 22",status:"Expired"},
  ];

  const stats = [
    {label:"Total Brands",value:"2,412",change:"+48 this week"},
    {label:"Total Readers",value:"183,204",change:"+2.1K this week"},
    {label:"Total Posts",value:"8,847",change:"+124 this week"},
    {label:"Monthly Revenue",value:"$12,450",change:"+$840 this week"},
  ];

  function addToWhitelist() {
    if (!newEmail || !newEmail.includes("@")) return;
    setWhitelist(w => [...w, newEmail]);
    setNewEmail("");
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  function removeFromWhitelist(email) {
    setWhitelist(w => w.filter(e => e !== email));
  }

  return (
    <div style={{paddingTop:58,minHeight:"100vh",background:"#0d0d0d"}}>
      <div style={{background:"#0a0a0a",borderBottom:"1px solid rgba(255,255,255,0.08)",padding:isMobile?"1.25rem":"1.5rem 2rem"}}>
        <div style={{maxWidth:1300,margin:"0 auto"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1.25rem",flexWrap:"wrap",gap:"1rem"}}>
            <div style={{display:"flex",alignItems:"center",gap:"1rem"}}>
              <div style={{width:40,height:40,background:C.fire,display:"flex",alignItems:"center",justifyContent:"center",...syne,fontWeight:800,fontSize:"0.85rem",color:"white"}}>BS</div>
              <div>
                <div style={{...syne,fontWeight:800,fontSize:"1.1rem",color:C.paper}}>BRANDSPACE Admin</div>
                <div style={{...mono,fontSize:"0.52rem",letterSpacing:"0.12em",textTransform:"uppercase",color:"#555"}}>Platform Owner · Full Access</div>
              </div>
            </div>
            <button onClick={()=>go("home")} style={{...mono,fontSize:"0.58rem",letterSpacing:"0.1em",textTransform:"uppercase",padding:"0.6rem 1.25rem",background:"rgba(255,255,255,0.06)",color:C.paper,border:"none",cursor:"pointer"}}>View Live Site →</button>
          </div>
          <div style={{display:"flex",gap:"0",overflowX:"auto",WebkitOverflowScrolling:"touch"}}>
            {tabs.map(t=>(
              <button key={t} onClick={()=>setActiveTab(t)} style={{...mono,fontSize:"0.56rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.75rem 1.1rem",background:"none",border:"none",borderBottom:activeTab===t?"2px solid #e8400c":"2px solid transparent",color:activeTab===t?C.paper:"#555",cursor:"pointer",whiteSpace:"nowrap",transition:"all .2s"}}>
                {t.charAt(0).toUpperCase()+t.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{maxWidth:1300,margin:"0 auto",padding:isMobile?"1.5rem 1.25rem":"2rem"}}>

        {activeTab==="overview" && (
          <div style={{display:"flex",flexDirection:"column",gap:"2rem"}}>
            <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr 1fr":"repeat(4,1fr)",gap:isMobile?"0.75rem":"1px",background:isMobile?"transparent":"rgba(255,255,255,0.06)"}}>
              {stats.map(s=>(
                <div key={s.label} style={{background:"#111",padding:"1.5rem",border:isMobile?"1px solid rgba(255,255,255,0.08)":"none"}}>
                  <div style={{...mono,fontSize:"0.54rem",letterSpacing:"0.12em",textTransform:"uppercase",color:"#555",marginBottom:"0.5rem"}}>{s.label}</div>
                  <div style={{...syne,fontWeight:800,fontSize:"1.8rem",letterSpacing:"-0.03em",color:C.paper,marginBottom:"0.25rem"}}>{s.value}</div>
                  <div style={{...mono,fontSize:"0.52rem",color:C.jade,letterSpacing:"0.08em"}}>{s.change}</div>
                </div>
              ))}
            </div>
            <div>
              <div style={{...mono,fontSize:"0.58rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"#555",marginBottom:"1rem"}}>Recent Brand Signups</div>
              <div style={{display:"flex",flexDirection:"column",gap:"1px",background:"rgba(255,255,255,0.06)"}}>
                {brands.slice(0,4).map(b=>(
                  <div key={b.name} style={{background:"#111",padding:"1rem 1.25rem",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"1rem",flexWrap:"wrap"}}>
                    <div style={{display:"flex",alignItems:"center",gap:"0.75rem"}}>
                      <div style={{width:32,height:32,borderRadius:6,background:C.fire,display:"flex",alignItems:"center",justifyContent:"center",...syne,fontWeight:700,fontSize:"0.65rem",color:"white"}}>{b.name.charAt(0)}</div>
                      <div>
                        <div style={{...syne,fontWeight:600,fontSize:"0.88rem",color:C.paper}}>{b.name}</div>
                        <div style={{...mono,fontSize:"0.5rem",color:"#555",letterSpacing:"0.08em"}}>{b.email}</div>
                      </div>
                    </div>
                    <div style={{display:"flex",alignItems:"center",gap:"0.75rem",flexWrap:"wrap"}}>
                      <span style={{...mono,fontSize:"0.5rem",letterSpacing:"0.1em",textTransform:"uppercase",padding:"0.18rem 0.5rem",background:b.plan==="Pro"?"rgba(232,64,12,0.15)":b.plan==="Growth"?"rgba(26,122,94,0.15)":"rgba(255,255,255,0.06)",color:b.plan==="Pro"?C.fire:b.plan==="Growth"?C.jade:"#666"}}>{b.plan}</span>
                      <span style={{...mono,fontSize:"0.5rem",color:"#555",letterSpacing:"0.08em"}}>{b.joined}</span>
                      {!b.verified&&<button style={{...mono,fontSize:"0.48rem",letterSpacing:"0.1em",textTransform:"uppercase",padding:"0.18rem 0.5rem",background:"rgba(200,168,75,0.15)",color:C.gold,border:"1px solid rgba(200,168,75,0.3)",cursor:"pointer"}}>Verify</button>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab==="brands" && (
          <div style={{display:"flex",flexDirection:"column",gap:"1.5rem"}}>
            <h2 style={{...syne,fontWeight:700,fontSize:"1.5rem",letterSpacing:"-0.02em",color:C.paper}}>All Brands</h2>
            <div style={{display:"flex",flexDirection:"column",gap:"1px",background:"rgba(255,255,255,0.06)"}}>
              {brands.map(b=>(
                <div key={b.name} style={{background:"#111",padding:"1.25rem",display:"flex",alignItems:isMobile?"flex-start":"center",justifyContent:"space-between",gap:"1rem",flexDirection:isMobile?"column":"row"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"0.85rem"}}>
                    <div style={{width:36,height:36,borderRadius:6,background:C.fire,display:"flex",alignItems:"center",justifyContent:"center",...syne,fontWeight:700,fontSize:"0.7rem",color:"white",flexShrink:0}}>{b.name.charAt(0)}</div>
                    <div>
                      <div style={{...syne,fontWeight:600,fontSize:"0.9rem",color:C.paper,marginBottom:"0.15rem"}}>{b.name}</div>
                      <div style={{...mono,fontSize:"0.5rem",color:"#555",letterSpacing:"0.08em"}}>{b.email} · {b.posts} posts · Joined {b.joined}</div>
                    </div>
                  </div>
                  <div style={{display:"flex",alignItems:"center",gap:"0.6rem",flexWrap:"wrap"}}>
                    <span style={{...mono,fontSize:"0.5rem",letterSpacing:"0.1em",textTransform:"uppercase",padding:"0.18rem 0.5rem",background:b.plan==="Pro"?"rgba(232,64,12,0.15)":b.plan==="Growth"?"rgba(26,122,94,0.15)":"rgba(255,255,255,0.06)",color:b.plan==="Pro"?C.fire:b.plan==="Growth"?C.jade:"#666"}}>{b.plan}</span>
                    <span style={{...mono,fontSize:"0.5rem",letterSpacing:"0.1em",textTransform:"uppercase",padding:"0.18rem 0.5rem",background:b.status==="Active"?"rgba(26,122,94,0.1)":"rgba(232,64,12,0.1)",color:b.status==="Active"?C.jade:C.fire}}>{b.status}</span>
                    {b.verified?<span style={{...mono,fontSize:"0.5rem",letterSpacing:"0.1em",textTransform:"uppercase",color:C.jade}}>✓ Verified</span>:<button style={{...mono,fontSize:"0.48rem",letterSpacing:"0.1em",textTransform:"uppercase",padding:"0.2rem 0.55rem",background:"rgba(200,168,75,0.15)",color:C.gold,border:"1px solid rgba(200,168,75,0.3)",cursor:"pointer"}}>Verify</button>}
                    <button style={{...mono,fontSize:"0.48rem",letterSpacing:"0.1em",textTransform:"uppercase",padding:"0.2rem 0.55rem",background:"rgba(255,255,255,0.06)",color:"#888",border:"none",cursor:"pointer"}}>{b.status==="Active"?"Suspend":"Restore"}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab==="content" && (
          <div style={{display:"flex",flexDirection:"column",gap:"1.5rem"}}>
            <h2 style={{...syne,fontWeight:700,fontSize:"1.5rem",letterSpacing:"-0.02em",color:C.paper}}>All Content</h2>
            <div style={{display:"flex",flexDirection:"column",gap:"1px",background:"rgba(255,255,255,0.06)"}}>
              {posts.map(p=>(
                <div key={p.title} style={{background:p.status==="Flagged"?"rgba(232,64,12,0.05)":"#111",padding:"1.25rem",display:"flex",alignItems:isMobile?"flex-start":"center",justifyContent:"space-between",gap:"1rem",flexDirection:isMobile?"column":"row",borderLeft:p.status==="Flagged"?"3px solid #e8400c":"3px solid transparent"}}>
                  <div style={{flex:1}}>
                    <div style={{...syne,fontWeight:600,fontSize:"0.9rem",color:C.paper,marginBottom:"0.25rem"}}>{p.title}</div>
                    <div style={{...mono,fontSize:"0.5rem",color:"#555",letterSpacing:"0.08em"}}>{p.brand} · {p.views.toLocaleString()} views · {p.date}</div>
                  </div>
                  <div style={{display:"flex",alignItems:"center",gap:"0.6rem",flexShrink:0}}>
                    <span style={{...mono,fontSize:"0.5rem",letterSpacing:"0.1em",textTransform:"uppercase",padding:"0.18rem 0.5rem",background:p.status==="Published"?"rgba(26,122,94,0.15)":"rgba(232,64,12,0.15)",color:p.status==="Published"?C.jade:C.fire}}>{p.status}</span>
                    <button style={{...mono,fontSize:"0.48rem",letterSpacing:"0.1em",textTransform:"uppercase",padding:"0.2rem 0.55rem",background:"rgba(255,255,255,0.06)",color:"#888",border:"none",cursor:"pointer"}}>Feature</button>
                    <button style={{...mono,fontSize:"0.48rem",letterSpacing:"0.1em",textTransform:"uppercase",padding:"0.2rem 0.55rem",background:"rgba(232,64,12,0.1)",color:C.fire,border:"none",cursor:"pointer"}}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab==="placements" && (
          <div style={{display:"flex",flexDirection:"column",gap:"1.5rem"}}>
            <h2 style={{...syne,fontWeight:700,fontSize:"1.5rem",letterSpacing:"-0.02em",color:C.paper}}>$5 Boost Placements</h2>
            <div style={{display:"flex",flexDirection:"column",gap:"1px",background:"rgba(255,255,255,0.06)"}}>
              {placements.map(p=>(
                <div key={p.brand+p.type} style={{background:"#111",padding:"1.25rem",display:"flex",alignItems:isMobile?"flex-start":"center",justifyContent:"space-between",gap:"1rem",flexDirection:isMobile?"column":"row"}}>
                  <div>
                    <div style={{...syne,fontWeight:600,fontSize:"0.9rem",color:C.paper,marginBottom:"0.25rem"}}>{p.brand}</div>
                    <div style={{...mono,fontSize:"0.5rem",color:"#555",letterSpacing:"0.08em"}}>{p.type} · {p.start} → {p.end}</div>
                  </div>
                  <div style={{display:"flex",alignItems:"center",gap:"0.75rem"}}>
                    <span style={{...syne,fontWeight:700,fontSize:"0.9rem",color:C.fire}}>{p.amount}</span>
                    <span style={{...mono,fontSize:"0.5rem",letterSpacing:"0.1em",textTransform:"uppercase",padding:"0.18rem 0.5rem",background:p.status==="Active"?"rgba(26,122,94,0.15)":"rgba(255,255,255,0.06)",color:p.status==="Active"?C.jade:"#555"}}>{p.status}</span>
                    {p.status==="Active"&&<button style={{...mono,fontSize:"0.48rem",letterSpacing:"0.1em",textTransform:"uppercase",padding:"0.2rem 0.55rem",background:"rgba(232,64,12,0.1)",color:C.fire,border:"none",cursor:"pointer"}}>Remove</button>}
                  </div>
                </div>
              ))}
            </div>
            <div style={{background:"#111",border:"1px solid rgba(255,255,255,0.08)",padding:"1.5rem"}}>
              <div style={{...mono,fontSize:"0.56rem",letterSpacing:"0.15em",textTransform:"uppercase",color:"#555",marginBottom:"1rem"}}>Add Free Placement</div>
              <p style={{...inst,fontSize:"0.82rem",color:"#666",marginBottom:"1rem"}}>Manually feature a brand for free — for partners, early supporters, or special cases.</p>
              <div style={{display:"flex",gap:"0.75rem",flexWrap:"wrap"}}>
                <input placeholder="Brand name" style={{...mono,fontSize:"0.65rem",padding:"0.65rem 1rem",border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.05)",color:C.paper,outline:"none",flex:1,minWidth:160}}/>
                <button style={{...mono,fontSize:"0.62rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.65rem 1.25rem",background:C.fire,color:"white",border:"none",cursor:"pointer",whiteSpace:"nowrap"}}>Add Free Boost</button>
              </div>
            </div>
          </div>
        )}

        {activeTab==="revenue" && (
          <div style={{display:"flex",flexDirection:"column",gap:"2rem"}}>
            <h2 style={{...syne,fontWeight:700,fontSize:"1.5rem",letterSpacing:"-0.02em",color:C.paper}}>Revenue</h2>
            <div style={{display:"grid",gridTemplateColumns:isMobile?"1fr 1fr":"repeat(4,1fr)",gap:isMobile?"0.75rem":"1px",background:isMobile?"transparent":"rgba(255,255,255,0.06)"}}>
              {[["Monthly Revenue","$12,450","+$840 this week"],["Growth Subscribers","184","+12 this week"],["Pro Subscribers","47","+3 this week"],["Boost Revenue","$235","+$45 this week"]].map(([l,v,c])=>(
                <div key={l} style={{background:"#111",padding:"1.5rem",border:isMobile?"1px solid rgba(255,255,255,0.08)":"none"}}>
                  <div style={{...mono,fontSize:"0.54rem",letterSpacing:"0.12em",textTransform:"uppercase",color:"#555",marginBottom:"0.5rem"}}>{l}</div>
                  <div style={{...syne,fontWeight:800,fontSize:"1.8rem",letterSpacing:"-0.03em",color:C.paper,marginBottom:"0.25rem"}}>{v}</div>
                  <div style={{...mono,fontSize:"0.52rem",color:C.jade,letterSpacing:"0.08em"}}>{c}</div>
                </div>
              ))}
            </div>
            <div style={{background:"#111",border:"1px solid rgba(255,255,255,0.08)",padding:"2rem",textAlign:"center"}}>
              <div style={{fontSize:"2rem",marginBottom:"0.75rem"}}>💳</div>
              <h3 style={{...syne,fontWeight:700,fontSize:"1.1rem",color:C.paper,marginBottom:"0.5rem"}}>Connect Stripe for full revenue tracking</h3>
              <p style={{...inst,fontSize:"0.85rem",color:"#666",marginBottom:"1.25rem"}}>Set up Stripe to track real payments, subscriptions, and payouts automatically.</p>
              <button style={{...mono,fontSize:"0.64rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.85rem 1.75rem",background:C.fire,color:"white",border:"none",cursor:"pointer"}}>Connect Stripe →</button>
            </div>
          </div>
        )}

        {activeTab==="whitelist" && (
          <div style={{display:"flex",flexDirection:"column",gap:"1.5rem",maxWidth:600}}>
            <h2 style={{...syne,fontWeight:700,fontSize:"1.5rem",letterSpacing:"-0.02em",color:C.paper}}>Whitelist</h2>
            <p style={{...inst,fontSize:"0.88rem",color:"#666",lineHeight:1.7}}>Add emails here to give free Pro access. Anyone on this list gets full Pro features when they sign up — no payment required.</p>
            <div style={{display:"flex",gap:"0.75rem",flexWrap:"wrap"}}>
              <input value={newEmail} onChange={e=>setNewEmail(e.target.value)} placeholder="email@example.com" style={{...mono,fontSize:"0.65rem",padding:"0.75rem 1rem",border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.05)",color:C.paper,outline:"none",flex:1,minWidth:200}}/>
              <button onClick={addToWhitelist} style={{...mono,fontSize:"0.62rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.75rem 1.25rem",background:C.fire,color:"white",border:"none",cursor:"pointer",whiteSpace:"nowrap"}}>{added?"Added! ✓":"Add Email"}</button>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"1px",background:"rgba(255,255,255,0.06)"}}>
              {whitelist.map(email=>(
                <div key={email} style={{background:"#111",padding:"1rem 1.25rem",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"1rem"}}>
                  <div>
                    <div style={{...mono,fontSize:"0.75rem",color:C.paper,letterSpacing:"0.06em"}}>{email}</div>
                    <div style={{...mono,fontSize:"0.5rem",color:C.jade,letterSpacing:"0.1em",marginTop:"0.2rem"}}>✓ Free Pro Access</div>
                  </div>
                  <button onClick={()=>removeFromWhitelist(email)} style={{...mono,fontSize:"0.5rem",letterSpacing:"0.1em",textTransform:"uppercase",padding:"0.25rem 0.65rem",background:"rgba(232,64,12,0.1)",color:C.fire,border:"none",cursor:"pointer"}}>Remove</button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

// LEGAL PAGES
function LegalPage({title, label, sections, go}) {
  const isMobile = useIsMobile();
  return (
    <div style={{paddingTop:58,minHeight:"100vh",background:C.paper}}>
      <div style={{background:C.paper2,borderBottom:"1px solid #d8d3ca",padding:isMobile?"2rem 1.25rem":"3rem 2rem"}}>
        <div style={{maxWidth:860,margin:"0 auto"}}>
          <button onClick={()=>go("home")} style={{...mono,fontSize:"0.58rem",letterSpacing:"0.15em",textTransform:"uppercase",color:C.muted,background:"none",border:"none",cursor:"pointer",marginBottom:"1.5rem",display:"flex",alignItems:"center",gap:"0.5rem"}}>← Back to Home</button>
          <div style={{...mono,fontSize:"0.58rem",letterSpacing:"0.22em",textTransform:"uppercase",color:C.fire,marginBottom:"0.75rem"}}>{label}</div>
          <h1 style={{...syne,fontWeight:800,fontSize:isMobile?"clamp(2rem,8vw,2.8rem)":"clamp(2.5rem,5vw,3.5rem)",letterSpacing:"-0.03em",lineHeight:0.95,color:C.ink}}>{title}</h1>
          <div style={{...mono,fontSize:"0.56rem",letterSpacing:"0.1em",color:C.muted,marginTop:"1rem"}}>Last updated: June 1, 2026</div>
        </div>
      </div>
      <div style={{maxWidth:860,margin:"0 auto",padding:isMobile?"2rem 1.25rem":"3rem 2rem"}}>
        {sections.map((s,i)=>(
          <div key={i} style={{marginBottom:"2.5rem"}}>
            <h2 style={{...syne,fontWeight:700,fontSize:"1.1rem",letterSpacing:"-0.01em",color:C.ink,marginBottom:"0.75rem",paddingBottom:"0.5rem",borderBottom:"1px solid #d8d3ca"}}>{s.title}</h2>
            {s.content.map((para,j)=>(
              <p key={j} style={{...inst,fontSize:"0.92rem",color:"#1a1a1a",lineHeight:1.85,marginBottom:"0.75rem"}}>{para}</p>
            ))}
          </div>
        ))}
        <div style={{background:C.paper2,border:"1px solid #d8d3ca",padding:"1.5rem",marginTop:"2rem"}}>
          <p style={{...inst,fontSize:"0.85rem",color:C.muted,lineHeight:1.7}}>Questions about these terms? Contact us at <span style={{color:C.fire}}>legal@brandspace.com</span></p>
        </div>
      </div>
    </div>
  );
}

function Terms({go}) {
  const sections = [
    {title:"1. Acceptance of Terms",content:["By accessing or using BRANDSPACE you agree to be bound by these Terms of Service. If you do not agree to these terms please do not use the platform.","These terms apply to all users including brands, readers, and visitors. We reserve the right to update these terms at any time. Continued use of the platform after changes constitutes acceptance of the new terms."]},
    {title:"2. Platform Description",content:["BRANDSPACE is a brand publishing platform that allows brand owners to publish content, showcase products, and grow their audience. Readers can discover brands, read articles, and engage with content.","BRANDSPACE is not responsible for the accuracy, completeness, or quality of content published by brands on the platform."]},
    {title:"3. Account Registration",content:["To list your brand on BRANDSPACE you must create an account with accurate information. You are responsible for maintaining the confidentiality of your account credentials.","You must be at least 18 years old to create a brand account. By creating an account you represent that all information you provide is accurate and truthful."]},
    {title:"4. Brand Accounts and Content",content:["Brands are solely responsible for all content they publish on BRANDSPACE. Content must be accurate, original, and related to your brand and products.","BRANDSPACE reserves the right to remove any content that violates these terms, is misleading, harmful, or otherwise inappropriate. Brands whose content is repeatedly removed may have their accounts suspended or terminated."]},
    {title:"5. Subscription Plans and Payments",content:["BRANDSPACE offers free and paid subscription plans. Paid plans are billed monthly and can be cancelled at any time from your dashboard.","The $5 featured placement boost is a one-time payment for 7 days of featured visibility. No plan is required. Brands must have a minimum of 1,000 followers on at least one social platform to be eligible for the boost.","All payments are processed securely through Stripe. BRANDSPACE does not store your payment information."]},
    {title:"6. $5 Boost Terms",content:["The $5 boost gives your brand featured placement on the homepage, discover page, and brand directory for 7 days.","To be eligible for a boost your brand must have at least 1,000 followers on at least one social media platform, maintain an active and authentic brand presence, publish brand-related content only, and not use fake followers or engagement.","BRANDSPACE reserves the right to remove boost placement without refund if these terms are violated."]},
    {title:"7. Prohibited Content",content:["The following content is strictly prohibited on BRANDSPACE: spam, misleading or false advertising, adult content, hate speech or discriminatory content, content that violates intellectual property rights, and anything illegal under applicable law.","Brands found publishing prohibited content will have their content removed and may face account suspension or termination without refund."]},
    {title:"8. Intellectual Property",content:["You retain ownership of all content you publish on BRANDSPACE. By publishing content you grant BRANDSPACE a non-exclusive license to display, distribute, and promote your content on the platform.","BRANDSPACE's design, branding, and platform code are the intellectual property of BRANDSPACE and may not be copied or reproduced without permission."]},
    {title:"9. Limitation of Liability",content:["BRANDSPACE is provided on an as-is basis. We make no warranties about the availability, reliability, or accuracy of the platform.","To the maximum extent permitted by law, BRANDSPACE shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform."]},
    {title:"10. Governing Law",content:["These terms are governed by the laws of the United States. Any disputes arising from these terms shall be resolved through binding arbitration."]},
  ];
  return <LegalPage title="TERMS OF SERVICE" label="Legal" sections={sections} go={go}/>;
}

function Privacy({go}) {
  const sections = [
    {title:"1. Information We Collect",content:["When you create an account we collect your name, email address, and brand information. When brands upgrade to a paid plan, payment information is collected and processed by Stripe — we do not store your card details.","We also collect usage data such as pages visited, articles read, and features used. This helps us improve the platform experience."]},
    {title:"2. How We Use Your Information",content:["We use your information to operate and improve the BRANDSPACE platform, send you account-related emails and platform updates, process payments through our payment processor Stripe, and display your brand profile and content to readers on the platform.","We do not sell your personal information to third parties. Ever."]},
    {title:"3. Information Sharing",content:["Your brand name, content, and public profile information are visible to all visitors of BRANDSPACE. This is necessary for the platform to function as a brand discovery tool.","We may share your information with service providers who help us operate the platform — including Stripe for payments, Kit for email communications, and Google for authentication. These providers are bound by their own privacy policies."]},
    {title:"4. Cookies",content:["BRANDSPACE uses cookies to keep you logged in and remember your preferences. We do not use tracking cookies for advertising purposes.","You can disable cookies in your browser settings but this may affect the functionality of the platform."]},
    {title:"5. Data Security",content:["We take reasonable measures to protect your information from unauthorized access, disclosure, or destruction. All data is transmitted over encrypted HTTPS connections.","No method of transmission over the internet is 100% secure. While we strive to protect your information we cannot guarantee absolute security."]},
    {title:"6. Your Rights",content:["You have the right to access, update, or delete your personal information at any time from your account settings. You can also request a copy of all data we hold about you by contacting us at legal@brandspace.com.","If you delete your account your personal information will be removed from our systems within 30 days."]},
    {title:"7. Email Communications",content:["By creating an account you agree to receive transactional emails related to your account. You can opt out of marketing emails at any time using the unsubscribe link in any email we send.","We use Kit to manage our email communications. Your email address is stored securely on their platform in accordance with their privacy policy."]},
    {title:"8. Changes to This Policy",content:["We may update this privacy policy from time to time. We will notify you of significant changes by email. Continued use of the platform after changes constitutes acceptance of the updated policy."]},
  ];
  return <LegalPage title="PRIVACY POLICY" label="Legal" sections={sections} go={go}/>;
}

function Guidelines({go}) {
  const sections = [
    {title:"Our Community Standard",content:["BRANDSPACE is built on the belief that every brand deserves a platform that actually gives a damn. These guidelines exist to protect that community and ensure BRANDSPACE remains a place of genuine brand stories, real products, and honest content.","We are not here to police creativity. We are here to protect the integrity of the platform and the trust of our readers."]},
    {title:"What Makes Great BRANDSPACE Content",content:["The best content on BRANDSPACE is authentic, specific, and genuinely useful. Share your real brand story — the wins, the losses, the lessons. Readers come here for honesty not press releases.","Great content includes behind-the-scenes looks at your brand, product development stories, founder lessons, industry insights, launch recaps, and strategic breakdowns."]},
    {title:"Content That Is Not Allowed",content:["The following content will be removed and may result in account suspension: misleading or false product claims, spam or low-quality AI-generated content with no original value, content that is not related to your brand or products, adult or explicit content, hate speech or discriminatory language, and content that violates any third party intellectual property rights.","If your content is removed you will be notified by email with the reason."]},
    {title:"Product Listings",content:["Products listed on BRANDSPACE must be real products that your brand sells. Product descriptions must be accurate and not misleading. Pricing must be current and correct.","Do not list products that are out of stock indefinitely, products you do not own or have rights to sell, or products that are illegal in any jurisdiction."]},
    {title:"$5 Boost Guidelines",content:["The $5 featured placement boost is available to any brand without a subscription. To be eligible you must have at least 1,000 genuine followers on at least one social media platform.","Boosted content must comply with all content guidelines. Brands that violate these guidelines during a boost period will have their placement removed without refund. Boost placements are reviewed by the BRANDSPACE team before going live.","Fake followers, purchased engagement, or any form of artificial social proof will result in immediate removal of boost placement and possible account termination."]},
    {title:"Verification",content:["Verified brands on BRANDSPACE have been reviewed and confirmed as legitimate businesses. To apply for verification submit your brand website and social media profiles from your dashboard.","Verification is at the sole discretion of BRANDSPACE and may be revoked if a brand violates these guidelines."]},
    {title:"Reporting Violations",content:["If you see content that violates these guidelines please report it using the flag button on any post. Our team reviews all reports within 48 hours.","You can also contact us directly at community@brandspace.com for urgent concerns."]},
    {title:"Enforcement",content:["BRANDSPACE reserves the right to remove any content, suspend any account, or terminate any account that violates these guidelines. We will always notify you by email when action is taken against your account.","Repeated or severe violations may result in permanent account termination without refund of any subscription fees."]},
  ];
  return <LegalPage title="CONTENT GUIDELINES" label="Community" sections={sections} go={go}/>;
}

function Placeholder({title, go}) {
  const isMobile = useIsMobile();
  return (
    <div style={{paddingTop:58,minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:C.paper,padding:"2rem"}}>
      <div style={{textAlign:"center"}}>
        <div style={{...mono,fontSize:"0.58rem",letterSpacing:"0.22em",textTransform:"uppercase",color:C.fire,marginBottom:"0.85rem"}}>Coming Soon</div>
        <h1 style={{...syne,fontWeight:800,fontSize:isMobile?"2rem":"3rem",letterSpacing:"-0.03em",marginBottom:"0.85rem"}}>{title}</h1>
        <p style={{...inst,color:C.muted,marginBottom:"1.75rem",fontSize:"0.9rem"}}>This page is being built. Check back soon.</p>
        <button onClick={() => go("home")} style={{...mono,fontSize:"0.66rem",letterSpacing:"0.12em",textTransform:"uppercase",padding:"0.85rem 2rem",background:C.ink,color:C.paper,border:"none",cursor:"pointer"}}>← Back to Home</button>
      </div>
    </div>
  );
}

// APP
export default function App() {
  const [page, setPage] = useState("home");
  const [ctx, setCtx] = useState({});

  function go(p, data) {
    setCtx(data || {});
    setPage(p);
    setTimeout(() => window.scrollTo({top:0, behavior:"smooth"}), 10);
  }

  const noFooter = ["login","signup"];

  function render() {
    if (page === "home") return <Home go={go} />;
    if (page === "discover") return <Discover go={go} />;
    if (page === "article") return <ArticlePage post={ctx.post} go={go} />;
    if (page === "about") return <About go={go} />;
    if (page === "brands") return <Brands go={go} />;
    if (page === "products") return <Products go={go} />;
    if (page === "pricing") return <Pricing go={go} />;
    if (page === "login") return <Login go={go} />;
    if (page === "signup") return <Signup go={go} initialPlan={ctx.plan||null} />;
    if (page === "terms") return <Terms go={go} />;
    if (page === "privacy") return <Privacy go={go} />;
    if (page === "guidelines") return <Guidelines go={go} />;
    if (page === "admin") return <Admin go={go} />;
    if (page === "dashboard") return <Dashboard go={go} />;
    if (page === "brandprofile") return <Placeholder title="BRAND PROFILE" go={go} />;
    return <Home go={go} />;
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Instrument+Sans:ital,wght@0,400;0,500;1,400&family=Martian+Mono:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { -webkit-text-size-adjust: 100%; }
        body { font-family: 'Instrument Sans', sans-serif; background: #f5f0e8; color: #0a0a0a; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        input::placeholder { color: #aaa; }
        button { font-family: inherit; }
        * { -webkit-tap-highlight-color: transparent; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #d8d3ca; border-radius: 2px; }
      `}</style>
      <Nav page={page} go={go} />
      <main>{render()}</main>
      {!noFooter.includes(page) && <Footer go={go} />}
    </>
  );
}

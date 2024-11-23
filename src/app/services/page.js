import BannerService from "../../../component/01-Banner-Service/Banner";
import ProgressService from "../../../component/03-Progress/Progress";
import WhatWeDoService from "../../../component/04-WhatWeDo-Service/WhatWeDo";
import WorkProcessServices from "../../../component/05-WorkProcess-Services/WorkProcess";
import ContactUs from "../../../component/11-ContactUs/ContactUs";

export default function Home() {
  return (
    <div>
      <BannerService />
      <ProgressService />
      <WorkProcessServices />
      <WhatWeDoService />
      <ContactUs />
    </div>
  );
}

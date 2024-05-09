import { TextGenerateEffect } from "../LandingFirstText/text-generate-effect";

const ImProudOfYou = () => {
  return (
    <div
      className={
        "max-w-[1440px] w-full mx-auto h-screen p-10 grid place-items-center"
      }>
      <div className='grid grid-cols-2'>
        <div className='grid place-items-center'>
          <h1 className='text-5xl '>Im Proud of You!</h1>
        </div>
        <div>
          <TextGenerateEffect words="Just in case no one has told you this today, Im so proud of you and everything you have endured and achieved. I hope you know how worthy you are and how much you bring to the world. Im proud of you for not giving up, no matter how many times you've wanted to. I'm proud of you for continuing to show up each day despite what you have been through. You should be proud of yourself too" />
        </div>
      </div>
    </div>
  );
};

export default ImProudOfYou;

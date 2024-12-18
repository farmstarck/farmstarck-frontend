import GenericHero from "../../components/common/GenericHero";
import Intro from "../../components/marketing/Career/Intro";
import Accordion from "../../components/marketing/Career/Accordion";

const accordionItems = [
  {
    title: "Full stack engineer",
    type: "remote work, lagos,nigeria",
    content: [
      {
        header: "the role",
        text: "Lorem ipsum dolor sit amet consectetur. Mattis massa sed tortor dui sit leo. Sit pulvinar interdum varius donec. Nunc montes cursus fermentum tortor amet et eu at. Viverra sit non potenti nullam dignissim. Nunc enim sit venenatis nisl tellus. Amet sem neque enim nunc suspendisse tortor gravida risus. Nulla vulputate.",
      },
      {
        header: "your responsibilities",
        text: "Lorem ipsum dolor sit amet consectetur. Mattis massa sed tortor dui sit leo. Sit pulvinar interdum varius donec. Nunc montes cursus fermentum tortor amet et eu at. Viverra sit non potenti nullam dignissim. Nunc enim sit venenatis nisl tellus. Amet sem neque enim nunc suspendisse tortor gravida risus. Nulla vulputate.",
      },
      {
        header: "what can you expect from us",
        text: "Lorem ipsum dolor sit amet consectetur. Mattis massa sed tortor dui sit leo. Sit pulvinar interdum varius donec. Nunc montes cursus fermentum tortor amet et eu at. Viverra sit non potenti nullam dignissim. Nunc enim sit venenatis nisl tellus. Amet sem neque enim nunc suspendisse tortor gravida risus. Nulla vulputate.",
      },
    ],
  },
  {
    title: "business developer",
    type: "remote work, lagos,nigeria",
    content: [
      {
        header: "the role",
        text: "Lorem ipsum dolor sit amet consectetur. Mattis massa sed tortor dui sit leo. Sit pulvinar interdum varius donec. Nunc montes cursus fermentum tortor amet et eu at. Viverra sit non potenti nullam dignissim. Nunc enim sit venenatis nisl tellus. Amet sem neque enim nunc suspendisse tortor gravida risus. Nulla vulputate.",
      },
      {
        header: "your responsibilities",
        text: "Lorem ipsum dolor sit amet consectetur. Mattis massa sed tortor dui sit leo. Sit pulvinar interdum varius donec. Nunc montes cursus fermentum tortor amet et eu at. Viverra sit non potenti nullam dignissim. Nunc enim sit venenatis nisl tellus. Amet sem neque enim nunc suspendisse tortor gravida risus. Nulla vulputate.",
      },
      {
        header: "what can you expect from us",
        text: "Lorem ipsum dolor sit amet consectetur. Mattis massa sed tortor dui sit leo. Sit pulvinar interdum varius donec. Nunc montes cursus fermentum tortor amet et eu at. Viverra sit non potenti nullam dignissim. Nunc enim sit venenatis nisl tellus. Amet sem neque enim nunc suspendisse tortor gravida risus. Nulla vulputate.",
      },
    ],
  },
  {
    title: "marketing officer",
    type: "remote work, lagos,nigeria",
    content: [
      {
        header: "the role",
        text: "Lorem ipsum dolor sit amet consectetur. Mattis massa sed tortor dui sit leo. Sit pulvinar interdum varius donec. Nunc montes cursus fermentum tortor amet et eu at. Viverra sit non potenti nullam dignissim. Nunc enim sit venenatis nisl tellus. Amet sem neque enim nunc suspendisse tortor gravida risus. Nulla vulputate.",
      },
      {
        header: "your responsibilities",
        text: "Lorem ipsum dolor sit amet consectetur. Mattis massa sed tortor dui sit leo. Sit pulvinar interdum varius donec. Nunc montes cursus fermentum tortor amet et eu at. Viverra sit non potenti nullam dignissim. Nunc enim sit venenatis nisl tellus. Amet sem neque enim nunc suspendisse tortor gravida risus. Nulla vulputate.",
      },
      {
        header: "what can you expect from us",
        text: "Lorem ipsum dolor sit amet consectetur. Mattis massa sed tortor dui sit leo. Sit pulvinar interdum varius donec. Nunc montes cursus fermentum tortor amet et eu at. Viverra sit non potenti nullam dignissim. Nunc enim sit venenatis nisl tellus. Amet sem neque enim nunc suspendisse tortor gravida risus. Nulla vulputate.",
      },
    ],
  },
  {
    title: "farm educator",
    type: "on-site work, lagos,nigeria",
    content: [
      {
        header: "the role",
        text: "Lorem ipsum dolor sit amet consectetur. Mattis massa sed tortor dui sit leo. Sit pulvinar interdum varius donec. Nunc montes cursus fermentum tortor amet et eu at. Viverra sit non potenti nullam dignissim. Nunc enim sit venenatis nisl tellus. Amet sem neque enim nunc suspendisse tortor gravida risus. Nulla vulputate.",
      },
      {
        header: "your responsibilities",
        text: "Lorem ipsum dolor sit amet consectetur. Mattis massa sed tortor dui sit leo. Sit pulvinar interdum varius donec. Nunc montes cursus fermentum tortor amet et eu at. Viverra sit non potenti nullam dignissim. Nunc enim sit venenatis nisl tellus. Amet sem neque enim nunc suspendisse tortor gravida risus. Nulla vulputate.",
      },
      {
        header: "what can you expect from us",
        text: "Lorem ipsum dolor sit amet consectetur. Mattis massa sed tortor dui sit leo. Sit pulvinar interdum varius donec. Nunc montes cursus fermentum tortor amet et eu at. Viverra sit non potenti nullam dignissim. Nunc enim sit venenatis nisl tellus. Amet sem neque enim nunc suspendisse tortor gravida risus. Nulla vulputate.",
      },
    ],
  },
];

const Career = () => {
  return (
    <div>
      <GenericHero
        header="Career"
        paragraph="Join an amazing team working on some of the most important challenges facing the world today!"
      />
      <Intro />
      <div className="p-5 mt-10">
        <div className="max-w-3xl m-auto flex flex-col gap-5 items-start">
          <Accordion items={accordionItems} />
        </div>
      </div>
    </div>
  );
};

export default Career;

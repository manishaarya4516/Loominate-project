import { Collapse } from "antd";

const items = [
  {
    key: "1",
    label: <h4>Be kind to Each Other</h4>,
    children: <p>The one simple rule to rule them all.</p>,
  },
  {
    key: "2",
    label: <h4>Be Constructive</h4>,
    children: (
      <p>
        Your words and actions matter, and are representative of your
        organization’s culture. Solutions and ideas eat complaining for
        breakfast and help drive change.
      </p>
    ),
  },
  {
    key: "3",
    label: <h4>Unite</h4>,
    children: (
      <p>
        The strength of our community comes from its diversity. Loominate weaves
        together the kindness and minds of colleagues from a wide range of
        backgrounds and beliefs. Use it to help shape your ideas and
        understanding. Not understanding someone’s viewpoint doesn’t mean that
        it’s wrong. Loominate is a place for rational discussion, debates and
        leveraging our differences!
      </p>
    ),
  },
];
const GuideLines = () => <Collapse accordion items={items} />;
export default GuideLines;

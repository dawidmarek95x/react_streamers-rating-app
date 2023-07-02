import { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Input,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";
import { IoIosArrowDown } from "react-icons/io";
import { STREAMER_INPUTS } from "data/streamers";

const Home = () => {
  const [openAccWithStreamerCreation, setOpenAccWithStreamerCreation] =
    useState(false);

  const handleOpenAccWithStreamerCreation = () =>
    setOpenAccWithStreamerCreation((cur) => !cur);

  return (
    <>
      <Accordion
        className={`mx-auto border sm:w-3/4 md:w-8/12 rounded-lg border-accent ${
          !openAccWithStreamerCreation && "hover:border-accent-dark"
        }`}
        open={openAccWithStreamerCreation}
      >
        <AccordionHeader
          className={`py-1 transition ease-in-out duration-300 ${
            openAccWithStreamerCreation
              ? "border-accent bg-accent hover:border-accent-dark hover:bg-accent-dark rounded-t-md"
              : "border-b-0 border-accent rounded-md bg-accent hover:bg-accent-dark"
          }`}
          onClick={handleOpenAccWithStreamerCreation}
        >
          <span className="mx-auto text-lg uppercase text-gray-100">
            Add a new Streamer
          </span>
          <IoIosArrowDown
            className={`fill-white transition ease-in-out duration-300 ${
              openAccWithStreamerCreation && "rotate-180"
            }`}
          />
        </AccordionHeader>
        <AccordionBody className="grid gap-3 p-5 rounded-b-md">
          <Input label="Name" />
          <Input label="Pseudonym" />
          <Textarea label="Description" />
          <Select label="Streaming platform">
            {STREAMER_INPUTS.STREAMING_PLATFORM.map((platform) => (
              <Option value={platform.toLowerCase()}>{platform}</Option>
            ))}
          </Select>
          <Textarea label="Avatar URL" />
        </AccordionBody>
      </Accordion>
    </>
  );
};

export default Home;

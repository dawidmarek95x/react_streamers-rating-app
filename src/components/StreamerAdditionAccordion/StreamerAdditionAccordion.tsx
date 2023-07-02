import { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { IoIosArrowDown } from "react-icons/io";
import StreamerAdditionForm from "components/StreamerAdditionForm/StreamerAdditionForm";

const StreamerAdditionAccordion = () => {
  const [openAccWithStreamerCreation, setOpenAccWithStreamerCreation] =
    useState(false);

  const handleOpenAccWithStreamerCreation = () =>
    setOpenAccWithStreamerCreation((cur) => !cur);

  return (
    <Accordion
      className={`mx-auto mb-5 border sm:w-3/4 md:w-8/12 rounded-lg border-accent ${
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
      <AccordionBody className="p-5">
        <StreamerAdditionForm />
      </AccordionBody>
    </Accordion>
  );
};

export default StreamerAdditionAccordion;

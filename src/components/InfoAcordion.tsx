import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const InfoAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem className="border-none" value="item-1">
        <AccordionTrigger className="p-1 sm:p2 rounded-md text-neutral-700 transition">
          How is my classification calculated?
        </AccordionTrigger>
        <AccordionContent className="p-1 sm:p-4  border-t border-neutral-200 rounded-b-md">
          <p className="mb-4 text-neutral-700">
            Where a student is eligible for an Honours degree by passing a valid
            combination of modules to comprise an award and has gained a minimum
            of 240 UEL credits at level 5 or level 6 on the current enrolment
            for the course, including a minimum of 120 UEL credits at level 6,
            the award classification is determined by the following
            calculations:
          </p>
          <ul className="list-disc pl-5 mb-4 text-neutral-600">
            <li className="mb-2">
              The credit-weighted arithmetic mean of the best 100 credits at
              level 6 multiplied by 0.8
            </li>
            <li>
              Plus, the credit-weighted arithmetic mean of the next best 80
              credits at levels 5 and/or 6 multiplied by 0.2
            </li>
          </ul>
          <p className="mb-4 text-neutral-700">
            The resulting mark, with all decimal points rounded up to the
            nearest whole number, determines the classification as follows:
          </p>
          <div className="list-decimal pl-5 text-neutral-600">
            <p className="mb-2">
              <strong className="text-neutral-800">70% - 100%:</strong> First
              Class Honours (1:1)
            </p>
            <p className="mb-2">
              <strong className="text-neutral-800">60% - 69%:</strong> Second
              Class Honours, First Division (2:1)
            </p>
            <p className="mb-2">
              <strong className="text-neutral-800">50% - 59%:</strong> Second
              Class Honours, Second Division (2:2)
            </p>
            <p>
              <strong className="text-neutral-800">40% - 49%:</strong> Third
              Class Honours (3rd)
            </p>
          </div>

          <p className="mt-5 text-sm">
            Classification criteria sourced from "
            <a
              href="https://uel.ac.uk/sites/default/files/part-3---academic-regulations.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-neutral-600 hover:text-neutral-950"
            >
              Part 3 Academic Regulations
            </a>
            ". Courtesy of{" "}
            <a
              href="https://www.uel.ac.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-neutral-600 hover:text-neutral-950"
            >
              University of East London (UEL)
            </a>
            .
          </p>

          <p className="mt-2 text-sm text-neutral-600">
            This is an Open Source Software (OSS) project. Anyone is welcome to
            contribute! View the code and contribute on{" "}
            <a
              href="https://github.com/lucian-duta/classification_calc"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-neutral-950"
            >
              GitHub
            </a>
            .
          </p>
          <p className="mt-5 text-sm text-neutral-600">
            Tool developed by{" "}
            <a
              href="https://www.linkedin.com/in/lucian-duta/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-neutral-950"
            >
              Lucian Duta
            </a>
            .
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default InfoAccordion;

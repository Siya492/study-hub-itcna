import type { Topic } from "@/types";

/**
 * Static topic data for the ITCNA1-12 module.
 *
 * TODO: Migrate all topic data from study_hub.html into this array.
 *       Each topic needs triple-layer explanations (textbook, lecturer,
 *       real-life) and key_facts bullet points.
 *
 * Once Supabase is wired up, this static array can serve as seed data
 * that gets inserted into the `topics` table via a script or migration.
 */
export const topics: Topic[] = [
  // ---- Example topic showing the expected structure ----
  // {
  //   id: "motherboard-components",
  //   title: "Motherboard Components",
  //   icon: "Cpu",
  //   week: 1,
  //   tag: "hardware",
  //   textbook:
  //     "The motherboard is the main printed circuit board (PCB) in a computer. " +
  //     "It hosts the CPU socket, RAM slots, expansion slots (PCIe), chipset, " +
  //     "and I/O connectors. The chipset manages data flow between the CPU, " +
  //     "memory, and peripherals.",
  //   lecturer:
  //     "Think of the motherboard as the 'nervous system' of your PC. " +
  //     "Everything plugs into it — CPU, RAM, GPU, storage. The chipset is " +
  //     "like a traffic cop directing data between all those parts.",
  //   reallife:
  //     "Imagine a city's road network. The motherboard is the road layout, " +
  //     "the CPU is city hall, RAM is short-term parking, and the chipset is " +
  //     "the set of traffic lights keeping everything flowing smoothly.",
  //   key_facts: [
  //     "ATX is the most common motherboard form factor",
  //     "The chipset determines which CPUs and RAM are compatible",
  //     "PCIe x16 slots are used for graphics cards",
  //     "BIOS/UEFI firmware is stored on a chip on the motherboard",
  //   ],
  // },
];

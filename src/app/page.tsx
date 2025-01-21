import Image from "next/image";

import placeholder from "../../public/images/placeholder.webp";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, minus
        ex. Odio vitae alias harum iste! Totam error atque ullam, adipisci eaque
        assumenda possimus ut porro, delectus soluta quia. Quo! Natus excepturi
        officiis, culpa quae obcaecati doloribus, tenetur quas repellat, saepe
        ad totam! Repellendus fugit corporis inventore doloribus magnam sit
        libero dignissimos, enim error, doloremque veniam cum dicta cumque
        molestiae!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
        voluptatibus. Libero fugiat corrupti eligendi eum sint iusto rerum
        soluta vero officiis temporibus assumenda alias ut, nisi praesentium
        corporis maxime quo.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolorum
        facilis voluptate voluptatum aut dicta neque debitis perspiciatis sunt
        quidem iure quae soluta alias nulla est, pariatur illo cumque ex!
        Explicabo aspernatur nihil excepturi optio similique reiciendis
        voluptatem, maxime dignissimos impedit corporis voluptate voluptatibus
        tempore vero autem, nam incidunt in magnam cum quasi libero recusandae
        dolores quo! Suscipit, hic similique? Eum suscipit voluptatibus
        quibusdam vero nesciunt tempora ea omnis laborum obcaecati quas sunt
        aliquid saepe voluptates eveniet repudiandae dolore facere voluptate,
        repellendus veritatis. Officiis quia odio harum eligendi placeat fugiat?
      </p>
      <Image
        src={placeholder}
        alt="Placeholder image"
        className="h-60 rounded-sm border border-zinc-400 object-cover"
        priority
      />
    </div>
  );
}

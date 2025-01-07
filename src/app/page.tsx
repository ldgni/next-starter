import Image from "next/image";

export default function Page() {
  return (
    <>
      <p className="mb-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, minus
        ex. Odio vitae alias harum iste! Totam error atque ullam, adipisci eaque
        assumenda possimus ut porro, delectus soluta quia. Quo! Natus excepturi
        officiis, culpa quae obcaecati doloribus, tenetur quas repellat, saepe
        ad totam! Repellendus fugit corporis inventore doloribus magnam sit
        libero dignissimos, enim error, doloremque veniam cum dicta cumque
        molestiae!
      </p>
      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
        voluptatibus. Libero fugiat corrupti eligendi eum sint iusto rerum
        soluta vero officiis temporibus assumenda alias ut, nisi praesentium
        corporis maxime quo.
      </p>
      <p className="mb-4">
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
        src="/images/placeholder-img.webp"
        alt="Placeholder image"
        height={240}
        width={736}
        className="h-60 w-full rounded-sm object-cover"
        priority
      />
    </>
  );
}

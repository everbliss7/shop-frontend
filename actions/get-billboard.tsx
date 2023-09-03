import { Billboard } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${id}`);
  let billboard = null;
  if (res.ok) {
    billboard = await res.json();
  }
  console.log({billboard});
  return billboard;
};

export default getBillboard;

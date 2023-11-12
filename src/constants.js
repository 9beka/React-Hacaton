export const ProductTable = [
  {
    title: "DEMO",
    dataIndex: "image",
    //   sorter: (a, b) => a.id - b.id,
    render: (imageUrl) => (
      <img src={imageUrl} alt="Product" style={{ width: 60, height: 50 }} />
    ),
  },
 
  {
    title: "Title",
    dataIndex: "title",
    sorter: (a, b) => a.title.localeCompare(b.title),
    sortDirection: ["descend", "ascend"],
  },
  {
    title: "Price",
    dataIndex: "price",
    render: (text) => `${text}$`,
  },
  {
    title: "Category",
    dataIndex: "category",
    width: 300,
  }, 
  {
    title: "ID",
    dataIndex: "id",
    sorter: (a, b) => a.id - b.id,
    sortDirection: ["descend", "ascend"],
  },
];

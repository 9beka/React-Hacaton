import React from "react";
import HocWrap from "../../hoc/HocWrap";
import { Table } from "antd";
import { PRODUCTAPI } from "../configi/config";
import fetchHoc from "../../hoc/fetchHoc";
import { ProductTable } from "../../constants";
import { useNavigate } from "react-router-dom";
const Product = ({state , loading}) => {

  const navigate = useNavigate()
  const handleClick= (record) =>{
navigate(`/details/${record.id}`);
  }
  
  return (
    <HocWrap>
         <h2>Products</h2>
       {Array.isArray(state) && (
        <Table
          dataSource={state}
          columns={ProductTable}
          rowKey="id"
          loading={loading}
          pagination={{
            showSizeChanger: true,
            pageSizeOptions: ["5", "10", "15", "20"],
          }}
          scroll={{ y: 500 }}
          onRow={(record) => ({
            onDoubleClick: () => handleClick(record),
          })}
        />
      )}
    </HocWrap>
  );
};

export default fetchHoc(Product ,PRODUCTAPI) ;

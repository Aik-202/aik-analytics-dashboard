import React from 'react'
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from "@tremor/react";
import { lastOrder } from '../../Data/demo';
import { viewIcon } from '../../Data';


export default function LastOrders() {
  return (
    <Card className='w-full lg:w-[40rem] xl:w-[45rem]'>
    <Title className='flex flex-row justify-between'>
      <span>Last Orders</span>
      <span className='text-[#34CAA5]'>See All</span>
    </Title>
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell className='w-[30rem]'>Name</TableHeaderCell>
          <TableHeaderCell>Date</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell>Invoice</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {lastOrder.map((item) => (
          <TableRow key={item.id}>
            <TableCell className='flex flex-row space-x-3 items-center'>
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </TableCell>
            <TableCell>
              <Text>{item.date}</Text>
            </TableCell>
            <TableCell>
              <Text>${item.amount.toLocaleString()}</Text>
            </TableCell>
            <TableCell className={`${item.status == 'Paid' ? 'text-[#34CAA5]' 
            : 'text-[#ED544E]'}`}>{item.status}</TableCell>
            <TableCell className='flex flex-row space-x-3 items-center'>
              <img src={viewIcon} alt="view-icon" />
              <p>View</p>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
  )
}

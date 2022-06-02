import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const Detail_Product = (props: Props) => {
    const router = useRouter();
    const {id} = router.query;
  return (
    <div>Detail_Product {id}</div>
  )
}

export default Detail_Product
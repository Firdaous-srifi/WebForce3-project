
import FaqItem from './FaqItem'
import { faqs } from '../../data/faqs'

const FaqList = () => {
  return (
    <ul className='mt-[30px]'>
        {faqs.map((item, index)=>(
            <FaqItem item={item} key={index}></FaqItem>
        ))}
    </ul>
  )
}

export default FaqList
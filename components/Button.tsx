import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
  type?: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  link: string;
}

const Button = ({ title, icon, variant, full, link }: ButtonProps) => {
  if (!link) {
    console.error("The 'link' prop is required and must be a string.");
    return null;
  }

  return (
    <Link href={link}>
      <span
        className={`flexCenter gap-3 rounded-full border ${variant} ${full ? 'w-full' : ''}`}
      >
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
        <span className="bold-16 whitespace-nowrap cursor-pointer ">{title}</span>
      </span>
    </Link>
  )
}

export default Button;

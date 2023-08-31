import image1 from "@/assets/sea-beach.png"
import image2 from "@/assets/sea.png"
import image3 from "../../../public/SunSet.png"

import Image from 'next/image'

const HomePage = () => {
  return (
    <main>
      <h1>Home</h1>
      {/* <Image width={600} height={381.5} src={image1} placeholder="blur" alt="" /> */}
      {/* <Image width={600} height={381.5} src="/SunSet.png" placeholder="blur" alt="" blurDataURL="data:image/webp;base64,UklGRkIDAABXRUJQVlA4WAoAAAAgAAAA0QAArwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggVAEAADATAJ0BKtIAsAA+7WqvVCmlo6MlMKuJMB2JaW7gTCKfUdKnTE+QHJ+QCP2kPpZizQm4HCmf9/LNWjYcTHSmiM5DUsfH+Oe3CEqAdLv0phgLGNJyynxGlI420L83wtYfyNaKxHn+AGr8nJF33kEaVhEXrGxyO9l4ejsNIvZNtSomwYynbLXyn43bosDe0D4ekFnrdLYkB+CthxGlGdmDFhW+AAD+8N/MX7krQ8UBnccj+J/zHqJMNAKhp9FEdVoXXZs+ON5b+mFsLpBRnRBc69DIU9n8mqgmEOQ0t7Dz47PSstJIznFBlPreOtRCLcwWlLN41cefAVBvUEGB9Z6Nnc1G8HTykrbvmTRyjNeXdm6m78A7Q56jh9RyOypcPmWrTS3neiIlduAUhsfhoZyX6ZpQDT2UgsED1+PUvEvVir3rp1tnkvBq/q4bdmNxSDBUQw8AAAA=" /> */}
      <Image width={600} height={381.5} src="https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="sunset" blurDataURL="https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=9&q=1" placeholder="blur" />
    </main>
  )
}

export default HomePage;
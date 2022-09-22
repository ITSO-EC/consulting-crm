const fileURL = "https://itso.ga/v1/posts/file/"
export default function getImage(string: string) {
    if(!string) return
    let imgsource = string?.split("/")
    let imageresult = imgsource[imgsource?.length -1]
    return fileURL+imageresult;
}  

const DownloadButton = props => {
  const downloadFile = () => {
    downloadFile = "./JackNingResume.pdf"
  }
  return (
    <button onClick={downloadFile} />
  )
}
export default DownloadButton;
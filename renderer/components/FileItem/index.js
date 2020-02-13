export default ({ filePath }) => (
  <div className="file-item text-left px-3 py-1">
    <style jsx>{`
      .file-item;
    `}</style>
    {console.log(filePath.toString())}
    <p>{filePath.toString()}</p>
  </div>
);

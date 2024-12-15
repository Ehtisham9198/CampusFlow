import { useEffect, useMemo, useState } from "react";


import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { IoEllipsisVertical } from "react-icons/io5";
import { Input } from "../components/ui/input";

export interface IFile {
  id:number,
  file_id: string;
  title: string;
  forwarded_by: string;
  created_at?: string;
  updated_at?: string;
}

function Track() {
  const [files, setFiles] = useState<IFile[]>([]);
  const [filter, setFilter] = useState<string>("");

  const filteredList = useMemo(() => {
    const q = filter.toLowerCase();
    return files.filter(
      (file) =>
        file.title.toLowerCase().includes(q) ||
        file.forwarded_by.toLowerCase().includes(q) ||
        file.file_id.toLowerCase().includes(q)
    );
  }, [filter, files]);

  useEffect(() => {
    (async () => {
      const files = await getFiles();
      setFiles(files);
    })();
  }, []);

  return (
    <div className="sm:p-4 space-y-2">
      <Input
        className="w-72 sm:w-80 max-w-full shadow"
        placeholder="search..."
        onChange={(e) => setFilter(e.target.value)}
      />

      <div className="shadow">
        <Table className="bg-white">
          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead>File ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Forwarded by</TableHead>
              <TableHead>Created on</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredList.map((file) => (
              <TableRow key={file.id}>
                <TableCell>{file.file_id}</TableCell>
                <TableCell className="line-clamp-1 h-9">{file.title}</TableCell>
                <TableCell>{file.forwarded_by}</TableCell>
                <TableCell>{file.created_at}</TableCell>
                <TableCell>
                  <button>
                    <IoEllipsisVertical />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Track;
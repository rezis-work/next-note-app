import TeacherClient from "./clientPage";
import fetchNotes from "./fetchNotes";

export default async function TeacherView() {
  const initialNotes = await fetchNotes();
  return <TeacherClient initialNotes={initialNotes} fetchNotes={fetchNotes} />;
}

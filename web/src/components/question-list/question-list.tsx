import { QuestionItem } from "@/components/question-item/question-item";
import { useRoomQuestion } from "@/http/use-room-question";

interface QuestionListProps {
  roomId: string;
}

export function QuestionList(props: QuestionListProps) {
  const { data } = useRoomQuestion(props.roomId);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-2xl text-foreground">
          Perguntas e Respostas
        </h2>
      </div>

      {data?.map((question) => {
        return <QuestionItem key={question.id} question={question} />;
      })}
    </div>
  );
}

export default function BulletPoint(props: { point: string }) {
  return (
    <div className="flex text-comment-green-light dark:text-comment-green-dark gap-x-1">
      <p> // </p>
      <p className="grow-1 text-left"> </p>{props.point}
    </div>
  );
}

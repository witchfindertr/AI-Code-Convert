interface Props {
  text: string;
  editable?: boolean;
  onChange?: (value: string) => void;
}

export const TextBlock: React.FC<Props> = ({
  text,
  editable = false,
  onChange = () => {},
}) => {
  return (
    <textarea
      className="min-h-[460px] w-full bg-[#1A1B26] p-4 text-base text-neutral-200 focus:outline-none"
      style={{ resize: 'none' }}
      value={text}
      onChange={(e) => onChange(e.target.value)}
      disabled={!editable}
    />
  );
};

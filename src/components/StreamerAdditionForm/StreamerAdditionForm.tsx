import { STREAMER_INPUTS } from "data/streamers";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateStreamerMutation } from "redux/services/streamersApi";
import { toast } from "react-toastify";

const StreamerAdditionForm = () => {
  const [createStreamer] = useCreateStreamerMutation();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<StreamerCreationData>({
    defaultValues: {
      name: "",
      pseudonym: "",
      description: "",
      streamingPlatform: "",
      avatarUrl: "",
    },
  });

  const onSubmit: SubmitHandler<StreamerCreationData> = async (data) => {
    const hasBeenSent = await createStreamer({ data });

    if ("data" in hasBeenSent) {
      toast.success("Streamer added successfully.");
    } else if ("error" in hasBeenSent) {
      const error = hasBeenSent?.error as StreamerSubmitError;

      console.log(error);

      switch (error?.data?.statusCode) {
        case 500:
          toast.error("Internal server error. Please try again later.");
          break;

        case 400:
          toast.error(
            `Incorrect data entered! Message: ${error?.data?.message}`
          );
          break;

        case 409:
          toast.error("The streamer with the given details already exists.");
          break;

        default:
          toast.error(`Unexpected error! Message: ${error?.data?.message}`);
          break;
      }
    }
  };

  const labelStyles = "block text-sm font-medium text-white mb-1";
  const inputStyles =
    "block w-full py-2 px-3 border-2 rounded-lg bg-transparent outline-0 text-white focus:border-accent";

  return (
    <form className="grid gap-3 rounded-b-md" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label
          className={`${labelStyles} ${errors.name && "text-red-900"}`}
          htmlFor="name"
        >
          Name
        </label>
        <input
          id="name"
          className={`${inputStyles} ${errors.name && "border-red-900"}`}
          {...register("name", {
            required: "The field cannot be empty.",
          })}
        />
        {errors.name && <p className="text-red-900">{errors.name.message}</p>}
      </div>

      <div>
        <label
          className={`${labelStyles} ${errors.name && "text-red-900"}`}
          htmlFor="pseudonym"
        >
          Pseudonym
        </label>
        <input
          id="pseudonym"
          className={`${inputStyles}`}
          {...register("pseudonym")}
        />
      </div>

      <div>
        <label
          className={`${labelStyles} ${errors.description && "text-red-900"}`}
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          id="description"
          className={`${inputStyles} resize-none ${
            errors.description && "border-red-900"
          }`}
          rows={3}
          {...register("description", {
            required: "The field cannot be empty.",
          })}
        ></textarea>
        {errors.description && (
          <p className="text-red-900">{errors.description.message}</p>
        )}
      </div>

      <div>
        <label
          className={`${labelStyles} ${
            errors.streamingPlatform && "text-red-500"
          }`}
          htmlFor="streamingPlatform"
        >
          Streaming platform
        </label>
        <select
          id="streamingPlatform"
          className={`block w-full p-2 border-2 rounded-lg bg-transparent outline-0 text-white focus:border-accent ${
            errors.streamingPlatform && "border-red-500"
          }`}
          {...register("streamingPlatform", {
            required: "The field cannot be empty.",
          })}
        >
          <option className="text-md text-black" value="">
            Select platform
          </option>
          {STREAMER_INPUTS.STREAMING_PLATFORM.map((platform, idx) => (
            <option
              key={idx}
              className="text-md text-black"
              value={platform.value}
            >
              {platform.label}
            </option>
          ))}
        </select>
        {errors.streamingPlatform && (
          <p className="text-red-900">{errors.streamingPlatform.message}</p>
        )}
      </div>

      <div>
        <label
          className={`${labelStyles} ${errors.avatarUrl && "text-red-900"}`}
          htmlFor="avatarUrl"
        >
          Avatar URL
        </label>
        <input
          id="avatarUrl"
          className={`${inputStyles} ${errors.avatarUrl && "border-red-900"}`}
          {...register("avatarUrl", {
            required: "The field cannot be empty.",
            pattern: {
              // eslint-disable-next-line
              value: /^(https?:\/\/)?([a-z0-9\-]+\.)+[a-z]{2,}(\/\S*)?$/i,
              message: "The value must be a valid URL link",
            },
          })}
        />
        {errors.avatarUrl && (
          <p className="text-red-900">{errors.avatarUrl.message}</p>
        )}
      </div>

      <button className="btn-accent ms-auto w-1/3 lg:w-1/4 xl:w-2/12 uppercase">
        Send
      </button>
    </form>
  );
};

export default StreamerAdditionForm;

import React from "react";
import {
  Box,
  Typography,
  TextField,
  TextareaAutosize,
  Stack,
  Select,
  FormControl,
  FormHelperText,
  MenuItem,
  Button,
} from "@pankod/refine-mui";
import { FormProps } from "interfaces/common";
import CustomButton from "./CustomButton";

const Form = ({
  type,
  register,
  handleImageChange,
  formLoading,
  onFinishHandler,
  propertyImage,
  handleSubmit,
}: FormProps) => {
  return (
    <Box>
      <Typography fontSize={25} color="#11145">
        {type} a property
      </Typography>
      <Box mt={2.5} borderRadius="12px" padding="20px" bgcolor="#FcFcFc">
        <form
          style={{
            marginTop: "20px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
          onSubmit={handleSubmit({ onFinishHandler })}>
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 400,
                color: "#11142d",
                fontSize: "16px",
              }}>
              Enter property name
            </FormHelperText>
            <TextField
              fullWidth
              required
              color="info"
              id="outlined-basic"
              variant="outlined"
              {...register("title", { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 400,
                color: "#11142d",
                fontSize: "16px",
              }}>
              Enter description
            </FormHelperText>
            <TextareaAutosize
              minRows={5}
              required
              placeholder="Write description ..."
              color="info"
              id="outlined-basic"
              variant="outlined"
              style={{
                width: "100%",
                borderColor: "Rgba(0, 0, 0, 0.23",
                backgroundColor: "transparent",
                borderRadius: "5px",
              }}
              {...register("description", { required: true })}
            />
          </FormControl>
          <Stack direction="row" gap={4}>
            <FormControl>
              <FormHelperText
                sx={{
                  flex: 1,
                  fontWeight: 400,
                  color: "#11142d",
                  fontSize: "16px",
                }}>
                Select Property type
              </FormHelperText>
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ "arial-label": "without-label" }}
                defaultValue="apartment"
                {...register("propertyType", { required: true })}>
                <MenuItem value="apartment">Apartments</MenuItem>
                <MenuItem value="villa">Villa</MenuItem>
                <MenuItem value="farmhouse">Farmhouse</MenuItem>
                <MenuItem value="condos">Condos</MenuItem>
                <MenuItem value="townhouse">Townhouse</MenuItem>
                <MenuItem value="duplex">Duplex</MenuItem>
                <MenuItem value="studio">Studio</MenuItem>
                <MenuItem value="chalet">Chalet</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <FormHelperText
                sx={{
                  fontWeight: 400,
                  color: "#11142d",
                  fontSize: "16px",
                }}>
                Enter property Price
              </FormHelperText>
              <TextField
                fullWidth
                required
                type={"number"}
                color="info"
                id="outlined-basic"
                variant="outlined"
                {...register("price", { required: true })}
              />
            </FormControl>
          </Stack>
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 400,
                color: "#11142d",
                fontSize: "16px",
              }}>
              Enter location
            </FormHelperText>
            <TextareaAutosize
              minRows={5}
              required
              color="info"
              id="outlined-basic"
              variant="outlined"
              style={{
                width: "100%",
                borderColor: "Rgba(0, 0, 0, 0.23",
                backgroundColor: "transparent",
                borderRadius: "5px",
              }}
              {...register("location", { required: true })}
            />
          </FormControl>
          <Stack direction="column" justifyContent="center" mb={2}>
            <Stack direction="row" gap={2}>
              <Typography fontWeight={400} color="#222" my={2}>
                Property Photo
              </Typography>
              <Button
                component="label"
                sx={{
                  width: "fit-content",
                  color: "#2ed480",
                  textTransform: "capitalize",
                  fontSize: "16px",
                }}>
                Upload *
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(e) => {
                    handleImageChange(e.target.value);
                  }}
                />
              </Button>
            </Stack>
            <Typography
              fontSize={14}
              color="#808191"
              sx={{ wordBreak: "break-all" }}>
              photo: {propertyImage?.name}
            </Typography>
          </Stack>
          <CustomButton
            type="submit"
            title={formLoading ? "submitting..." : "submit"}
            backgroundColor="#475be9"
            color="FcFcfc"
          />
        </form>
      </Box>
    </Box>
  );
};

export default Form;

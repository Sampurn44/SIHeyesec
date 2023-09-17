import cv2
import cvlib as cv
from cvlib.object_detection import draw_bbox
from vidgear.gears import CamGear

# Initialize video stream from a YouTube URL with streaming mode enabled
stream = CamGear(source='https://www.youtube.com/watch?v=En_3pkxIJRM', stream_mode=True, logging=True).start()

# Initialize variables to keep track of counts
count = 0
while True:
    # Read a frame from the video stream
    frame = stream.read()

    # Resize the frame to a fixed size (1020x600 pixels)
    frame = cv2.resize(frame, (1020, 600))

    # Detect common objects in the frame using cvlib
    bbox, label, conf = cv.detect_common_objects(frame)

    # Draw bounding boxes around detected objects on the frame
    frame = draw_bbox(frame, bbox, label, conf)

    # Count the number of 'car' and 'person' labels
    train_count = label.count('train')
    person_count = label.count('person')

    # Display counts with labels on the frame using cv2.putText
    cv2.putText(frame, f'Train: {train_count}', (50, 60), cv2.FONT_HERSHEY_PLAIN, 3, (255, 255, 255), 3)
    
    # Add space by adjusting the vertical position
    cv2.putText(frame, f'Person: {person_count}', (50, 120), cv2.FONT_HERSHEY_PLAIN, 3, (255, 255, 255), 3)

    # Display the frame in a window named "FRAME"
    cv2.imshow("FRAME", frame)

    # Check for the 'Esc' key (key code 27) to break out of the loop
    if cv2.waitKey(1) & 0xFF == 27:
        break

# Release the video stream
stream.release()

# Close all OpenCV windows
cv2.destroyAllWindows()

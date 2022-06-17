from rest_framework.serializers import ModelSerializer
from .models import note

#What we are doing here is we are making the notes carry IDs, like #1, #2, and so on...
class NoteSerializer(ModelSerializer):
    class Meta:
        model = note
        fields = '__all__'
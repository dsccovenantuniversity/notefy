from django.db import models

# Create your models here.

class note(models.Model):
    body = models.TextField(null=False, blank=False) #It means we can't submit a blank note
    created_at = models.DateTimeField(auto_now_add=True)    #Time the note was created. 
    updated_at = models.DateTimeField(auto_now=True)    #Time the note was last updated.

    def __str__(self):
        return self.body[0:50] + "..." #Only show the first 50 characters of the note
        
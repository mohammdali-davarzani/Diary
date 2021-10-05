from django.db import models

# Create your models here.

class Memoir(models.Model):
    
    body = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'Memoir'

    def __str__(self):
        return "{}".format(self.created)
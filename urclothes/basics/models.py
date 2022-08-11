from django.db import models

# Create your models here.
# Model User
class User(models.Model):
    #id=models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    password = models.CharField(max_length=50)
    stereotype = models.CharField(max_length=150, default=None)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name
    
# Model for Answers
class Answers(models.Model):
    #id=models.AutoField(primary_key=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    p1_color = models.CharField(max_length=100)
    p2_season = models.CharField(max_length=100)
    p3_design = models.CharField(max_length=100)
    p4_combination = models.CharField(max_length=100)
    p5_sport = models.CharField(max_length=100)
    p6_music = models.CharField(max_length=100)
    p7_size = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.answer
    
# Model for Enterprises
class Enterprises(models.Model):
    #id=models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    category=models.CharField(max_length=50)
    description=models.CharField(max_length=50)
    adress=models.CharField(max_length=50)
    imagen=models.ImageField(upload_to='imagenes/', null=True, verbose_name='Imagen')